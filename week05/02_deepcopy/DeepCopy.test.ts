import { test, expect } from 'vitest';

import { duplicate } from './DeepCopy';

test("Duplicate - Simple 1", function() {

  const obj = {
    name: 'Jeff',
    age: 23
  };

  const dup = duplicate(obj);
  expect(dup).not.toBe(obj);
  expect(dup).toEqual(obj)
  
})

test("Duplicate - Simple 2", function() {

  const obj = {
    name: 'Jeff',
    age: 23,
    orders: [
      1, 2, 3
    ]
  };

  const dup = duplicate(obj);

  
  expect(dup).not.toBe(obj);
  expect(dup).toEqual(obj)
  
})

test("Duplicate - Self-Ref", function() {

  const obj = {
    name: 'Jeff',
    age: 23,
    orders: [
      1, 2, 3
    ],
    ref: null,
  } as any;

  obj.ref = obj;

  const dup = duplicate(obj);

  
  expect(dup).not.toBe(obj);
  expect(dup.ref).not.toBe(obj);
  expect(dup.ref).toBe(dup);
  expect(dup).toEqual(obj)
  
})


test("Duplicate - Cycle 1", function() {

  const obj1 = {
    name: 'sink1',
    links: []
  } as any;

  const obj2 = {
    name: 'sink2',
    links: [obj1]
  } as any;

  obj1.links.push(obj2);


  const dup = duplicate(obj1);

  
  expect(dup).not.toBe(obj1);
  expect(dup.ref).not.toBe(obj1);
  expect(dup.ref).toBe(dup);
  expect(dup).toEqual(obj1)

  expect(dup.links[0]).not.toBe(null);
  
  expect(dup.links[0].links[0]).not.toBe(null);
  expect(dup.links[0].links[0]).toBe(dup);
  
})


test("Duplicate - Cycle 2", function() {

  const obj2 = {
    name: 'obj2',
    links: [],
    
  } as any;

  const obj3 = {
    name: 'obj3',
    links: [
      obj2
    ]
  } as any

  const obj1 = {
    name: 'obj1',
    links: [
      obj3
    ],
  } as any;

  obj2.related.push(obj1);


  const dup = duplicate(obj1);
  
  expect(dup).not.toBe(obj1);
  expect(dup.ref).not.toBe(obj1);
  expect(dup.ref).toBe(dup);
  expect(dup).toEqual(obj1)

  //Checks if the cycle has wrapped around and found
  // the `dup` instance
  expect(dup.links[0].links[0].links[0]).toBe(dup);
  
})
