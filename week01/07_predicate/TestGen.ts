
import { test, expect } from 'vitest'

export type TestGenState<S> = {
  and: <M>(item: TestData<M>, nextTestFn: TestFunc<M>) => TestGenState<M>
  with: (changeSet: Partial<TestData<S>>) => TestGenState<S>
  on: (tdata: ExclusiveTestData) => TestGenState<S>
  finish: () => void
}

type TestFunc<T> = (item: TestData<T>) => void;

export type TestData<T> = {
  prefix: string
  predicateFn: (e: T) => boolean,
  input: Array<T>,
  expected: Array<T>
}

type ExclusiveTestFn = () => void; 

type ExclusiveTestData = {
  name: string,
  test: ExclusiveTestFn
}

type TestFn<T> = (tdata: TestData<T>) => void;



function SeparateTest(tdata: ExclusiveTestData) {
  const testfn = tdata.test
  test(tdata.name, function() {
    testfn();
  });
}

const TestGenAnd = <N>(nextItem: TestData<N>, nextTestFn:TestFn<N>) =>
  TestGenerator<N>(nextItem, nextTestFn);

export function TestGenerator<A>(item: TestData<A>, testFn: TestFunc<A>): TestGenState<A> {

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

