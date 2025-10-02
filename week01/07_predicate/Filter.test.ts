
import { filter } from './Filter';
import { test, expect } from 'vitest';
import { TestGenerator, TestData } from './TestGen';

function FilterTestFn<T>(tdata: TestData<T>) {

  const teststr = `${tdata.prefix} - ${tdata.expected.toString()}`
  test(teststr, function() {
    const input = tdata.input;
    const predfn = tdata.predicateFn;
    const actual = filter(input, predfn);
    const expected = tdata.expected;

    expect(actual).toEqual(expected);
  });
  
}

TestGenerator({
  prefix: 'Filter<number> Test',
  predicateFn: (e) => e > 0, 
  input: [1],
  expected: [1]
}, FilterTestFn).with({
  input: [5, 3],
  expected: [5, 3]
}).with({
  predicateFn: (e) => e > 3, 
  input: [1, 2, 3, 4, 5, 6],
  expected: [4, 5, 6]
})
.with({
  predicateFn: (e) => e < 3, 
  input: [6, 5, 4, 3, 2, 1],
  expected: [2, 1]
})
.and({
  prefix: 'Filter<string> Test',
  predicateFn: (e) => e.length > 5, 
  input: ['One'],
  expected: []
}, FilterTestFn)
.with({
  input: ['Fourty'],
  expected: ['Fourty']
})
.with({
  input: ['Fourty', 'FourtyFour'],
  expected: ['Fourty', 'FourtyFour']
})
.finish();
