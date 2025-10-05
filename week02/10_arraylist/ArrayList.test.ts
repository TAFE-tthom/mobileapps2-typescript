
import { test, expect } from 'vitest';

import {ArrayList} from './ArrayList';

type TestGenState<S> = {
  and: <M>(item: TestData<M>, nextTestFn?: TestFunc<M>) => TestGenState<M>
  with: (changeSet: Partial<TestData<S>>) => TestGenState<S>
  on: (tdata: ExclusiveTestData) => TestGenState<S>
  finish: () => void
}

type TestFunc<T> = (item: TestData<T>) => void;

type TestData<T> = {
  prefix: string
  input: Array<T>,
  expected: Array<T>
  Op: (deq: ArrayList<T>, index: number) => T | null
}

type ExclusiveTestFn = () => void; 

type ExclusiveTestData = {
  name: string,
  test: ExclusiveTestFn
}


function MakeTest<T>({prefix, input, expected, Op }: TestData<T>) {
  const expstr = expected.toString();
  const teststr = `${prefix} - ${expstr}`;

  test(teststr, function() {
    const deq = new ArrayList<T>();

    for(const e of input) {
      deq.append(e);
    }

    for(let i = 0; i < deq.length; i++) {
      const exp = expected[i];
      const v = Op(deq, i);
      expect(v).toEqual(exp);
    }
    
  }) 
}

function SeparateTest(tdata: ExclusiveTestData) {
  const testfn = tdata.test
  test(tdata.name, function() {
    testfn();
  });
}

const TestGenAnd = <N>(nextItem: TestData<N>, nextTestFn=MakeTest<N>) =>
  TestGenerator<N>(nextItem, nextTestFn);

function TestGenerator<A>(item: TestData<A>, testFn: TestFunc<A>=MakeTest): TestGenState<A> {

  testFn(item);

  const finishFn = () => { };
  
  const withFn = (changeSet: Partial<TestData<A>>) => {
    return TestGenerator<A>({...item, ...changeSet }, testFn);
  };

  
  const onFn = (tdata: ExclusiveTestData): TestGenState<A> => {

    const onFnRef = onFn;
    SeparateTest(tdata);
    
    return {
      and: TestGenAnd,
      with: withFn,
      on: onFnRef,
      finish: finishFn
    }
  };

  
  const transition: TestGenState<A> = {
    and: TestGenAnd,
    with: withFn,
    on: onFn,
    finish: finishFn
  }
  return transition;
}


TestGenerator({
  prefix: 'ArrayList<number> Test, get(...)',
  Op: (deq: ArrayList<number>, i: number) => deq.getItem(i),
  input: [1],
  expected: [1]
})
.with({
    input: [5, 3],
    expected: [5, 3]
})
.with({
    input: [5, 3, 7, 8, 9, 3, 2, 1, 5],
    expected: [5, 3, 7, 8, 9, 3, 2, 1, 5],
})
.and({
  prefix: "ArrayList<number> Test, get(...)",
  Op: (deq: ArrayList<number>, i: number) => deq.getItem(i),
  input: [1, 2, 3],
  expected: [1, 2, 3]
})
.and({
  prefix: 'ArrayList<string> Test, get(...)',
  Op: (deq: ArrayList<string>, i: number) => deq.getItem(i),
  input: ['Two', 'One', 'Three'],
  expected: ['Two', 'One', 'Three']
})
.with({
  input: ['Hero', 'Villian', 'Evil', 'Good'],
  expected: ['Hero', 'Villian', 'Evil', 'Good'],
})
.on({
  name: "ArrayList - Get On Empty",
  test: () => {
    const pq = new ArrayList();
    expect(pq.getItem(0)).toBe(null);
  }
})
.finish();
