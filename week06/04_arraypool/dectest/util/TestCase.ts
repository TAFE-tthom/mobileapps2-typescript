import { test, expect as viexpect } from 'vitest';
import { TestCase, TestOutcomeObserver } from './TestData';



export const expect = viexpect ? viexpect :
  (data: any): any => {} //TODO: Finish this

export const SetupTestCase =
  <O, E=O, I=undefined>(testcase: TestCase<O, E, I>,
    outcome: TestOutcomeObserver) => {

  const id = testcase.id;
  const prefix = testcase.prefix;
  const suffix = testcase.suffix;
  const fmttest = `Test #${id}: ${prefix} ${suffix ? `- ${suffix}` : '' }`;

  test(fmttest, () => {
    const state = testcase.state;
    const expected = testcase.expected;
    const evalOp = testcase.evalfn;
    const input = testcase.input;
    const result = testcase.operfn(input, state);

    evalOp(result, expected, state);

    outcome.pass();
  })
}

