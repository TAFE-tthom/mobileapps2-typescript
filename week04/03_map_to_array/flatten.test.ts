import {expect, test, } from 'vitest';

import { flatten, MapRecord } from './flatten';

function checkFlattened(data: Array<[string, MapRecord]>,
  expected: Array<[string, MapRecord]>) {

  const expCount = expected.length;

  expect(data.length).toBe(expCount);

  for(let i = 0; i < expected.length; i++) {
    const [ak, av] = data[i];
    const [ek, ev] = expected[i];

    expect(ak).toBeDefined();
    expect(av).toBeDefined();
    expect(ek).toBeDefined();
    expect(ev).toBeDefined();

    expect(ak).toEqual(ek);
    expect(av).toEqual(ev);
  }
  
  
}


test('flatten, a few entries, different keys', function() {

  let rawEntries: Array<[string, MapRecord]> = 
    [
      [
        'jeff', { 'procedures':
        [
          {code: "visit", date: "2025-02-07 0900"},
          {code: "visit", date: "2025-03-10 0900"},
        ], 'age': 31}
      ],
      [
        'Alice', { 'procedures': 
        [
          {code: "visit", date: "2025-02-08 0900"},
          {code: "visit", date: "2024-03-10 0900"},
        ], 'age': 35}
      ],
      [
        'Kelly', { 'accounts': [], 'age': 21}
      ],
      [
        'Bob', { 'test': 
        [
          {code: "visit", score: 55 },
        ], 'age': 51}
      ],
    ];

  let expected = new Array<[string, MapRecord]>(...rawEntries);
  
  let m = new Map(expected);

  let res = flatten(m)  
  checkFlattened(res, expected);
  
});


test('flatten, two entries', function() {

  let rawEntries: Array<[string, MapRecord]> = 
    [
      [
        'jeff', { 'procedures':
        [
          {code: "visit", date: "2025-02-07 0900"},
          {code: "visit", date: "2025-03-10 0900"},
        ], 'age': 31}
      ],
      [
        'Alice', { 'procedures':
          
        [
          {code: "visit", date: "2025-02-08 0900"},
          {code: "visit", date: "2024-03-10 0900"},
        ], 'age': 35}
      ],
    ];

  let expected = new Array<[string, MapRecord]>(...rawEntries);
  
  let m = new Map(expected);

  let res = flatten(m)  
  checkFlattened(res, expected);
  
});

test('flatten, one entry', function() {

  let rawEntries: Array<[string, MapRecord]> = 
    [
      [
        'jeff', { 'procedures':
        [
          {code: "visit", date: "2025-02-07 0900"},
          {code: "visit", date: "2025-03-10 0900"},
        ], 'age': 31}
      ],
    ];

  let expected = new Array<[string, MapRecord]>(...rawEntries);
  
  let m = new Map(expected);

  let res = flatten(m)  
  checkFlattened(res, expected);
  
});

test('flatten, no entries', function() {

  let rawEntries: Array<[string, MapRecord]> = 
    [];

  let expected = new Array<[string, MapRecord]>(...rawEntries);
  
  let m = new Map(expected);

  let res = flatten(m)  
  checkFlattened(res, expected);
  
});
