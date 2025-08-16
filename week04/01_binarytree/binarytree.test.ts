import {expect, test} from '@jest/globals';

import { BinaryTreeMap, ObjectComparator } from './binarytree';


test("binary tree, construction", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
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
});


test("binary tree, insert: 1", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [8, "Eight"],
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of items) {
    
    expect(bt.get(k)).toEqual(v);
  }
  
});

test("binary tree, insert 3, balanced", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [1, "One"],
    [6, "Six"],
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of items) {
    
    expect(bt.get(k)).toEqual(v);
  }
  
});

test("binary tree, insert 4, imbalanced", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  const items: Array<[number, string]> = [
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
    [10, "Ten"],
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of items) {
    
    expect(bt.get(k)).toEqual(v);
  }
  
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
    [9, "Nine"],
  ];

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of items) {
    
    expect(bt.get(k)).toEqual(v);
  }
});


test("binary tree, insert 10, string and number", function() {
  
  const cmpfn = (a: string, b: string) => { return a.localeCompare(b); };
  const bt = new BinaryTreeMap<string, number>(cmpfn);

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [9, "Nine"],
  ];

  for(const [k, v] of items) {
    bt.insert(v, k);
  }

  for(const [k, v] of items) {
    expect(bt.get(v)).toEqual(k);
    
  }
});

test("binary tree, remove, root", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  // Data to be added

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [9, "Nine"],
  ];

  const remove: Array<[number, string]> = [
    [8, "Eight"]
  ];

  const toSkip = [
    8
  ];

  //
  // Below: Insert, Remove and Check
  //  

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of remove) {
    expect(bt.remove(k)).toEqual(v);
  }

  for(const [k, v] of items) {
    if(!toSkip.includes(k)) {    
      expect(bt.get(k)).toEqual(v);
    }
  }
  
});

test("binary tree, remove, root.left", function() {
  
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  // Data to be added

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [9, "Nine"],
  ];

  const remove: Array<[number, string]> = [
    [3, "Three"]
  ];

  const toSkip = remove.map(([k, _v]) => k);

  //
  // Below: Insert, Remove and Check
  //  

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of remove) {
    expect(bt.remove(k)).toEqual(v);
  }

  for(const [k, v] of items) {
    if(!toSkip.includes(k)) {    
      expect(bt.get(k)).toEqual(v);
    }
  }
});


test("binary tree, remove, root.right", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  // Data to be added

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [9, "Nine"],
  ];

  const remove: Array<[number, string]> = [
    [10, "Ten"]
  ];

  const toSkip = remove.map(([k, _v]) => k);

  //
  // Below: Insert, Remove and Check
  //  

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of remove) {
    expect(bt.remove(k)).toEqual(v);
  }

  for(const [k, v] of items) {
    if(!toSkip.includes(k)) {    
      expect(bt.get(k)).toEqual(v);
    }
  }
  
});

test("binary tree, remove, root.left.left", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  // Data to be added

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [9, "Nine"],
  ];

  const remove: Array<[number, string]> = [
    [3, "Three"]
  ];

  const toSkip = remove.map(([k, _v]) => k);

  //
  // Below: Insert, Remove and Check
  //  

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of remove) {
    expect(bt.remove(k)).toEqual(v);
  }

  for(const [k, v] of items) {
    if(!toSkip.includes(k)) {    
      expect(bt.get(k)).toEqual(v);
    }
  }
  
});

test("binary tree, remove, root.right.left", function() {
  const cmpfn = (a: number, b: number) => { return a - b; };
  const bt = new BinaryTreeMap<number, string>(cmpfn);

  // Data to be added

  const items: Array<[number, string]> = [
    [8, "Eight"],
    [5, "Five"],
    [3, "Three"],
    [1, "One"],
    [10, "Ten"],
    [2, "Two"],
    [6, "Six"],
    [7, "Seven"],
    [9, "Nine"],
  ];

  const remove: Array<[number, string]> = [
    [9, "Nine"]
  ];

  const toSkip = remove.map(([k, _v]) => k);

  //
  // Below: Insert, Remove and Check
  //  

  for(const [k, v] of items) {
    bt.insert(k, v);
  }

  for(const [k, v] of remove) {
    expect(bt.remove(k)).toEqual(v);
  }

  for(const [k, v] of items) {
    if(!toSkip.includes(k)) {    
      expect(bt.get(k)).toEqual(v);
    }
  }
  
});
