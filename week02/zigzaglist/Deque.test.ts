
import { test, expect } from 'vitest'
import { Deque } from './Deque';

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
  deqOp: (deq: Deque<T>) => T | null
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
    const deq = new Deque<T>();

    for(const e of input) {
      deq.prepend(e);
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
  prefix: 'Deque<number> Test, pop()',
  deqOp: (deq: Deque<number>) => deq.pop(),
  input: [1],
  expected: [1]
}).with({
    input: [5, 3],
    expected: [5, 3]
})
.and({
  prefix: "Deque<number> Test, dequeue()",
  deqOp: (deq: Deque<number>) => deq.dequeue(),
  input: [1, 2, 3],
  expected: [3, 2, 1],
  
}).with({
  input: [6, 2, 9, -1, 2, 5, 8],
  expected: [8, 5, 2, -1, 9, 2, 6],
})
.and({
  prefix: 'Deque<string> Test, pop()',
  deqOp: (deq: Deque<string>) => deq.pop(),
  input: ['Two', 'One', 'Three'],
  expected: ['Two', 'One', 'Three']
})
.with({
  prefix: 'Deque<string> Test, dequeue()',
  deqOp: (deq: Deque<string>) => deq.dequeue(),
  expected: ['Three', 'One', 'Two']
})
.with({
  input: ['Hero', 'Villian', 'Evil', 'Good'],
  expected: ['Good', 'Evil', 'Villian', 'Hero']
})
.with({
  input: ['11', '22', '00'],
  expected: ['00', '22', '11']
})
.on({
  name: "Deque - Pop On Empty",
  test: () => {
    const pq = new Deque();
    expect(pq.pop()).toBe(null);
  }
})
.on({
  name: "Deque - Dequeue On Empty",
  test: () => {
    const pq = new Deque();
    expect(pq.dequeue()).toBe(null);
  }
})
.finish();
