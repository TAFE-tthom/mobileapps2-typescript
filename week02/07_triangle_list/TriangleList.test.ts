
import { test, expect } from 'vitest'
import { TriangleList } from './TriangleList';

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
  Op: (deq: TriangleList<T>, i: number, j: number) => T | null
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
    const deq = new TriangleList<T>();

    for(const e of input) {
      deq.append(e);
    }

    let i = 0;
    let j = 0;
    
    for(const exp of expected) {
      
      const v = Op(deq, i, j)
      expect(v).toEqual(exp);

      j = (j + 1) % (i+1);
      if(j === 0) {
        i++;
      }
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
  prefix: 'TriangleList<number> Test, get(i, j)',
  Op: (deq: TriangleList<number>, i: number, j: number) => deq.get(i, j),
  input: [1],
  expected: [1]
}).with({
    input: [5, 3],
    expected: [5, 3]
})
.with({
  Op: (deq: TriangleList<number>, i: number, j: number) => deq.get(i, j),
  input: [1, 2, 3],
  expected: [1, 2, 3],
  
}).with({
  input: [6, 2, 9, -1, 2, 5, 8],
  expected: [6, 2, 9, -1, 2, 5, 8]
})
.and({
  prefix: 'TriangleList<string> Test, get(i, j)',
  Op: (deq: TriangleList<string>, i: number, j: number) => deq.get(i, j),
  input: ['Two', 'One', 'Three'],
  expected: ['Two', 'One', 'Three']
})
.with({
  input: ['Hero', 'Villian', 'Evil', 'Good'],
  expected: ['Hero', 'Villian', 'Evil', 'Good']
})
.with({
  input: ['11', '22', '00'],
  expected: ['11', '22', '00']
})
.on({
  name: "TriangeList - set(0, 0) on empty",
  test: () => {
    const pq = new TriangleList();
    pq.set(0, 0, 2);
    expect(pq.get(0, 0)).toBe(2);
  }
})
.on({
  name: "TriangeList - get(0, 0) on empty",
  test: () => {
    const pq = new TriangleList();
    expect(pq.get(0, 0)).toBe(null);
  }
})
.finish();
