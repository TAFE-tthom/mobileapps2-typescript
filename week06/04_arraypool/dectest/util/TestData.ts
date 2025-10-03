import { TestDocumentIncomplete} from '../doc-states/incomplete';

export type TestConditionsInit<S=any> = () => S;

export type TestEvalFn<O=any, E=any, S=any>
  = (actual: O, expected: E, state: S) => void;

export type TestEvalObject = {
  suffix: string
  evalfn: TestEvalFn
}

export type TestOperFn<OpInput=any, O=any, S=any> =
  (input: OpInput, state: S) => O;


export type TestData<I=any, O=any, E=any, S=any> = {
  document: TestDocumentIncomplete
  testConditions: TestConditionsInit<S>;
  testInputs: Array<I>
  testExpecteds: Array<E>
  testOutputs: Array<O>
  testState: any
}

export type TestCaseSummary = {
  title: string,
  testId: number,
  observer: TestOutcomeObserver
}

export type TestDetails<I=any, O=any, E=any, S=any, OpInput=any> = {
  alltests: Array<TestCaseSummary>
  currentSet: Array<OpInput>;
  testData: TestData<I, O, E, S>
  testOperFn: TestOperFn<OpInput, O, S>
  testEvalFn: TestEvalFn<O, E, S>;
}

export type TestCase<O=any, E=any, I=any, S=any> = {
  id: number
  prefix: string,
  suffix: string | null,
  input: I,
  expected: E,
  state: S,
  operfn: (input: I, state: S) => O,
  evalfn: (actual: O, expected: E, state: S) => void;
}


export class TestOutcomeObserver {
  passed: boolean = false;

  pass() {
    this.passed = true;
  }

  didPass() {
    return this.passed;
  }
}


export type TestFinalFns<OpInput, O, OpExpected, S> = {
  operFn: TestOperFn<OpInput, O, S>,
  evalFn: TestEvalFn<O, OpExpected, S>
}
