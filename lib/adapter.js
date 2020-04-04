'use strict';
var events = require('events');
var _ = require('lodash');
var inquirer = require('inquirer');
var BasePrompt = require('inquirer/lib/prompts/base');
var sinon = require('sinon');
var { PassThrough } = require('stream');

function init(mockedAnswers, options, question, _rl, answers) {
  this.mockedAnswers = { ...answers, ...mockedAnswers };
  this.question = question;
  if (typeof options === 'function') {
    this.callback = options;
  } else if (options) {
    this.callback = options.callback;
    this.throwOnMissingAnswer = options.throwOnMissingAnswer;
  }

  this.callback = this.callback || (answers => answers);
}

const run = function() {
  var answer = this.mockedAnswers[this.question.name];
  var isSet;

  switch (this.question.type) {
    case 'list':
      // List prompt accepts any answer value including null
      isSet = answer !== undefined;
      break;
    case 'confirm':
      // Ensure that we don't replace `false` with default `true`
      isSet = answer || answer === false;
      break;
    default:
      // Other prompts treat all falsy values to default
      isSet = Boolean(answer);
  }

  if (!isSet) {
    answer = this.question.default;

    if (this.throwOnMissingAnswer && answer === undefined) {
      return Promise.reject(
        new Error(`Answer for ${this.question.name} was not provided`)
      );
    }

    if (answer === undefined && this.question.type === 'confirm') {
      answer = true;
    }
  }

  console.log(this);
  if (this.handleAnswer) {
    return this.handleAnswer(answer).then(answer => {
      return Promise.resolve(this.callback(answer));
    });
  }

  return Promise.resolve(this.callback(answer));
};

function DummyPrompt() {
  init.apply(this, arguments);
}

DummyPrompt.prototype.run = run;

class InquirerDummyPrompt extends BasePrompt {
  constructor(mockedAnswers, options, question, rl, answers) {
    super(question, rl, answers);
    console.log('init');
    console.log(arguments);
    init.apply(this, arguments);
    console.log(this.handleAnswer);
    console.log(this);
  }
}

InquirerDummyPrompt.prototype.run = run;

function TestAdapter(answers) {
  answers = answers || {};
  this.promptModule = inquirer.createPromptModule({
    input: new PassThrough(),
    output: new PassThrough(),
    skipTTYChecks: true
  });

  Object.keys(this.promptModule.prompts).forEach(function(promptName) {
    this.promptModule.registerPrompt(
      promptName,
      InquirerDummyPrompt.bind(InquirerDummyPrompt, answers, undefined)
    );
  }, this);

  this.diff = sinon.spy();
  this.log = sinon.spy();
  _.extend(this.log, events.EventEmitter.prototype);

  // Make sure all log methods are defined
  [
    'write',
    'writeln',
    'ok',
    'error',
    'skip',
    'force',
    'create',
    'invoke',
    'conflict',
    'identical',
    'info',
    'table'
  ].forEach(function(methodName) {
    this.log[methodName] = sinon.stub().returns(this.log);
  }, this);
}

TestAdapter.prototype.prompt = function(questions, prefilledAnswers) {
  return this.promptModule(questions, prefilledAnswers);
};

module.exports = {
  DummyPrompt: DummyPrompt,
  InquirerDummyPrompt: InquirerDummyPrompt,
  TestAdapter: TestAdapter
};
