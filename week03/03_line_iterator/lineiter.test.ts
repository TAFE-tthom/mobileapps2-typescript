import {expect, test} from '@jest/globals';

import { LineIterator } from './lineiter';


test("iter created", () => {
  let iter = new LineIterator('')
	expect(iter).not.toBeNull();
});

test("iter zero elements", () => {
  let nums = '';
  let expected: Array<string> = [''];
  let iter = new LineIterator(nums);
  let i = 0;
  for(const e of iter) {
    expect(e).toBe(expected[i]);
    i += 1;
  }
	expect(i).toBe(expected.length);
})

test("iter double new-lines", () => {
  let nums = 'One\n\nTwo\n\n';
  let expected: Array<string> = [
    "One", '', "Two", ''
  ];
  let iter = new LineIterator(nums);
  let i = 0;
  for(const e of iter) {
    expect(e).toBe(expected[i]);
    i += 1;
  }
	expect(i).toBe(expected.length);
})

test("iter of two elements", () => {
  let nums = 'One\nTwo\n';
  let expected: Array<string> = [
    "One", "Two"
  ];
  let iter = new LineIterator(nums);
  let i = 0;
  for(const e of iter) {
    expect(e).toBe(expected[i]);
    i += 1;
  }
	expect(i).toBe(expected.length);
})

test("iter many elements", () => {
  let nums = 'One\nTwo\nThree\nFour';
  let expected: Array<string> = [
    "One", "Two", "Three", "Four"
  ];
  let iter = new LineIterator(nums);
  let i = 0;
  for(const e of iter) {
    expect(e).toBe(expected[i]);
    i += 1;
  }
	expect(i).toBe(expected.length);
})
