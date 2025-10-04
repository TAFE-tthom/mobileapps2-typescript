
import { test, expect } from 'vitest'
import { CircularBuffer } from './CircularBuffer';

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
  deqOp: (deq: CircularBuffer<T>) => T | null
}

type ExclusiveTestFn = () => void; 

type ExclusiveTestData = {
  name: string,
  test: ExclusiveTestFn
}


function MakeTest<T>({prefix, input, expected, deqOp }: TestData<T>) {
  const expstr = expected.toString();
  const teststr = `${prefix} - ${expstr}`;

  test(teststr, function() {
    const deq = new CircularBuffer<T>();

    for(const e of input) {
      deq.enqueue(e);
    }

    for(const exp of expected) {
      const v = deqOp(deq)
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
  prefix: 'CircularBuffer<number> Test, pop()',
  deqOp: (deq: CircularBuffer<number>) => deq.dequeue(),
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
  prefix: "CircularBuffer<number> Test, dequeue()",
  deqOp: (deq: CircularBuffer<number>) => deq.dequeue(),
  input: [1, 2, 3],
  expected: [1, 2, 3]
})
.and({
  prefix: 'CircularBuffer<string> Test, dequeue()',
  deqOp: (deq: CircularBuffer<string>) => deq.dequeue(),
  input: ['Two', 'One', 'Three'],
  expected: ['Two', 'One', 'Three']
})
.with({
  input: ['Hero', 'Villian', 'Evil', 'Good'],
  expected: ['Hero', 'Villian', 'Evil', 'Good'],
})
.on({
  name: "CircularBuffer - Dequeue On Empty",
  test: () => {
    const pq = new CircularBuffer();
    expect(pq.dequeue()).toBe(null);
  }
})
.finish();
