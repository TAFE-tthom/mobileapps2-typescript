import {expect, test} from '@jest/globals';

import { ArrayIter } from './arrayiter';


test("iter created", () => {
  let iter = new ArrayIter([])
	expect(iter).not.toBeNull();
});
test("iter zero elements", () => {
  let nums: Array<number> = []
  let iter = new ArrayIter(nums);
  let i = 0;
  while(iter.hasNext()) {
    let e = iter.next();
  	expect(e).toBe(nums[i]);
    i++;
  }
	expect(i).toBe(0);
})
test("iter one element", () => {

  let nums = [40]
  let iter = new ArrayIter(nums);
  let i = 0;
  while(iter.hasNext()) {
    let e = iter.next();
  	expect(e).toBe(nums[i]);
    i++;
  }
	expect(i).toBe(1);
})
test("iter two elements", () => {

  let nums = [20, 50]
  let iter = new ArrayIter(nums);
  let i = 0;
  while(iter.hasNext()) {
    let e = iter.next();
  	expect(e).toBe(nums[i]);
    i++;
  }
	expect(i).toBe(2);
})
test("iter many elements", () => {

  let nums = [50, 60, 70, 20, 23, 24,5, 67, 100]
  let iter = new ArrayIter(nums);
  let i = 0;
  while(iter.hasNext()) {
    let e = iter.next();
  	expect(e).toBe(nums[i]);
    i++;
  }
	expect(i).toBe(nums.length);
})
