// Wrap mock to allow https://www.npmjs.com/package/test to be used as an alternative to node:test
import { type mock as mockType } from 'node:test';

export type MockTracker = typeof mockType;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - test is optional alternative to node:test
// eslint-disable-next-line import-x/no-unresolved
const { mock: actualMock } = await import('node:test').catch(() => import('test'));
const mock: MockTracker = actualMock;

export { mock };
