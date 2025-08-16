import {expect, test, } from '@jest/globals';

import { BinaryTreeMap } from './binarytree';


test("binary tree iterator, insert: 1", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [8, "Eight"],
  ];

  const expected: Array<[number, string]> = [
    [8, "Eight"]
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  let i = 0;
  let iter = bt.inorderIterator();
  for(const o of iter) {
    if(o) {
      const [ek, ev] = expected[i];
      const k = o[0];
      const v = o[1];
      expect(k).toEqual(ek);
      expect(v).toEqual(ev);
    } else {
      //undefined
      expect(o).toBeDefined();
    }
    i += 1;
  }
  expect(i).toBe(1);
  
});

test("binary tree iterator, insert 3, balanced", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [1, "One"],
    [6, "Six"],
  ];

  const expected: Array<[number, string]> = [
    [1, "One"],
    [6, "Six"],
    [8, "Eight"],
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  let i = 0;
  let iter = bt.inorderIterator();
  for(const o of iter) {
    if(o) {
      const [ek, ev] = expected[i];
      const k = o[0];
      const v = o[1];
      expect(k).toEqual(ek);
      expect(v).toEqual(ev);
    } else {
      //undefined
      expect(o).toBeDefined();
    }
    i += 1;
  }
  expect(i).toBe(3);
  
});

test("binary tree iterator, insert 4, imbalanced", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
    [10, "Ten"],
  ];

  const expected: Array<[number, string]> = [
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
    [10, "Ten"],
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  let i = 0;
  let iter = bt.inorderIterator();
  for(const o of iter) {
    if(o) {
      const [ek, ev] = expected[i];
      const k = o[0];
      const v = o[1];
      expect(k).toEqual(ek);
      expect(v).toEqual(ev);
    } else {
      //undefined
      expect(o).toBeDefined();
    }
    i += 1;
  }
  expect(i).toBe(4);
  
  
});

test("binary tree, insert 10", function() {
  
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [4, "Four"],
    [9, "Nine"],
  ];

  const expected: Array<[number, string]> = [
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"],
    [6, "Six"],
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
    [10, "Ten"],
  ];

  
  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  let i = 0;
  let iter = bt.inorderIterator();
  for(const o of iter) {
    if(o) {
      const [ek, ev] = expected[i];
      const k = o[0];
      const v = o[1];
      expect(k).toEqual(ek);
      expect(v).toEqual(ev);
    } else {
      //undefined
      expect(o).toBeDefined();
    }
    i += 1;
  }
  expect(i).toBe(10);
  
});


