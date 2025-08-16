
import {expect, test} from '@jest/globals';

import { BinaryHeap } from './heap';


function checkOrder(data: Array<number>,
  expected: Array<number>) {

  const expCount = expected.length;

  expect(data.length).toBe(expCount);

  for(let i = 0; i < expected.length; i++) {
    const e = expected[i];
    const a = data[i]
    expect(a).toEqual(e);
  }
}


test('binary heap, construction', function() {
  let bheap = new BinaryHeap();

  expect(bheap).toBeDefined();
})
test('binary heap, empty', function() {
  
  let bheap = new BinaryHeap();

  expect(bheap).toBeDefined();
  let n = bheap.removeMin();
  expect(n).toEqual(null);
})
test('binary heap, many', function() {
  
  let bheap = new BinaryHeap();

  const input = [
    10,
    5,
    20,
    4,
    9,
    2,
    8,
    1,
    44,
    43
  ];


  for(const i of input) {
    bheap.insert(i);
  }

  const output: Array<number> = [];

  for(let i = 0; i < input.length; i++) {
    const v = bheap.removeMin();
    if(v) {
      output.push(v);
    } 
  }
  input.sort();
  checkOrder(output, input);
})
test('binary heap, two', function() {
  
  let bheap = new BinaryHeap();

  const input = [
    20,
    4,
  ];


  for(const i of input) {
    bheap.insert(i);
  }

  const output: Array<number> = [];

  for(let i = 0; i < input.length; i++) {
    const v = bheap.removeMin();
    if(v) {
      output.push(v);
    } 
  }
  input.sort();
  checkOrder(output, input);
})
test('binary heap, four', function() {
  
  let bheap = new BinaryHeap();

  const input = [
    10,
    5,
    20,
    4,
  ];


  for(const i of input) {
    bheap.insert(i);
  }

  const output: Array<number> = [];

  for(let i = 0; i < input.length; i++) {
    const v = bheap.removeMin();
    if(v) {
      output.push(v);
    } 
  }
  input.sort();
  checkOrder(output, input);
})
test('binary heap, one', function() {
  
  let bheap = new BinaryHeap();

  const input = [
    10,
  ];


  for(const i of input) {
    bheap.insert(i);
  }

  const output: Array<number> = [];

  for(let i = 0; i < input.length; i++) {
    const v = bheap.removeMin();
    if(v) {
      output.push(v);
    } 
  }
  input.sort();
  checkOrder(output, input);
})
