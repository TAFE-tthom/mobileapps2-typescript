import {expect, test} from '@jest/globals';

import { kthSmallest } from './kth_smallest'

test("Minimum", () => {
  let a1 = [5];
  let a2 = [5, 1, 3, 9, -13];
  let a3 = [2, 2, 2, 2, 2];
  let a4 = [1, 1, 1, 1, 1];

  let r1 = kthSmallest(a1, 0);
  let r2 = kthSmallest(a2, 0);
  let r3 = kthSmallest(a3, 0);
  let r4 = kthSmallest(a4, 0);

  expect(r1).toBe(5);
  expect(r2).toBe(-13);
  expect(r3).toBe(2);
  expect(r4).toBe(1);
})
test("Median", () => {
  let a1 = [-10, -8, -6, -3, -1, 0, 3, 4];
  let a2 = [-1, 0, 3, 4, -8, -6, -2, -3, -10];
  let a3 = [5, 6, 7, 1, 2, 3, 4, 10, 99, 8, 9];
  let a4 = [0, 3, 4];

  let r1 = kthSmallest(a1, 4);
  let r2 = kthSmallest(a2, 4);
  let r3 = kthSmallest(a3, 5);
  let r4 = kthSmallest(a4, 1);

  expect(r1).toBe(-1);
  expect(r2).toBe(-2);
  expect(r3).toBe(6);
  expect(r4).toBe(3);
})
test("Maximum", () => {
  let a1 = [5, -5];
  let a2 = [5, 1, 3, 9, -13];
  let a3 = [2, 2, 2, 1, 3, 3];

  let r1 = kthSmallest(a1, 4);
  let r2 = kthSmallest(a2, 4);
  let r3 = kthSmallest(a3, 5);

  expect(r1).toBe(5);
  expect(r2).toBe(9);
  expect(r3).toBe(3);
})
