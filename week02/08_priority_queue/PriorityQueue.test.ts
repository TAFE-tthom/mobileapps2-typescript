import { test, expect } from 'vitest'
import { PriorityQueue, PriorityQueueComparator } from './PriorityQueue';

type TestGenState<S> = {
  and: <M>(item: TestData<M>, nextTestFn?: TestFunc<M>) => TestGenState<M>
  with: (changeSet: Partial<TestData<S>>) => TestGenState<S>
  on: (tdata: ExclusiveTestData) => TestGenState<S>
  finish: () => void
}

type TestFunc<T> = (item: TestData<T>) => void;

type TestData<T> = {
  prefix: string
  comparator: PriorityQueueComparator<T>
  input: Array<T>,
  expected: Array<T>
}

type ExclusiveTestFn = () => void; 

type ExclusiveTestData = {
  name: string,
  test: ExclusiveTestFn
}


function MakeTest<T>({prefix, comparator,
  input, expected }: TestData<T>) {
  const expstr = expected.toString();
  const teststr = `${prefix} - ${expstr}`;

  test(teststr, function() {
    const pq = new PriorityQueue<T>(comparator);

    for(const e of input) {
      pq.enqueue(e);
    }

    for(const exp of expected) {
      const v = pq.dequeueMin();
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
  prefix: 'PriorityQueue<number> Test',
  comparator: (a: number, b: number) => a - b,
  input: [1],
  expected: [1]
}).with({
    input: [5, 3],
    expected: [3, 5]
}).with({
    input: [1, 2, 3, 4, 5, 6],
    expected: [1, 2, 3, 4, 5, 6]
}).with({
  input: [6, 5, 4, 3, 2, 1]
}).with({
  expected: [-10, 1, 2, 4, 5, 6, 7, 8],
  input: [7, 6, 1, -10, 4, 5, 2, 8],
})
.and({
  prefix: 'PriorityQueue<string> Test',
  comparator: (a: string, b: string) => a.localeCompare(b),
  input: ['One'],
  expected: ['One']
})
.with({
  input: ['Two', 'One', 'Three'],
  expected: ['One', 'Three', 'Two']
})
.with({
  input: ['Hero', 'Villian', 'Evil', 'Good'],
  expected: ['Evil', 'Good', 'Hero', 'Villian']
})
.with({
  input: ['11', '22', '00'],
  expected: ['00', '11', '22']
})
.on({
  name: "PriorityQueue - Dequeue On Empty",
  test: () => {
    const pq = new PriorityQueue((_a, _b) => 0);
    expect(pq.dequeueMin()).toBe(null);
  }
})
.on({
  name: "PriorityQueue - Dequeue On Empty (Many)",
  test: () => {
    const pq = new PriorityQueue((_a, _b) => 0);
    expect(pq.dequeueMin()).toBe(null);
    expect(pq.dequeueMin()).toBe(null);
    expect(pq.dequeueMin()).toBe(null);
  }
})
.finish();
