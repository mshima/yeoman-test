import { TestAdapter as BaseTestAdapter, type TestAdapterOptions } from '@yeoman/adapter/testing';
import { mock } from './mock-wrapper.js';

export class TestAdapter extends BaseTestAdapter {
  constructor(options: TestAdapterOptions = {}) {
    super({
      spyFactory: ({ returns }) =>
        returns
          ? mock.fn(
              () => {},
              () => returns,
            )
          : mock.fn(),
      ...options,
    });
  }
}

export { DummyPrompt, type DummyPromptOptions, type DummyPromptCallback, type TestAdapterOptions } from '@yeoman/adapter/testing';

export type AskedQuestions = Array<{ name: string; answer: any }>;
