import {
    TestData,
    TestEvalFn,
    TestOperFn,
    TestFinalFns,
    TestCaseSummary,
    TestOutcomeObserver,
    TestCase
  }
  from '../../util/TestData'
import { SetupTestCase } from '../../util/TestCase'


export class TestFinalizer<OpInput=any,OpExpected=any, I=any, O=any, E=any, S=any> {

  #currentInputSet: Array<OpInput>;
  #currentExpectedSet: Array<OpExpected>;
  #suiteDraft: TestData<I, O, E, S>;
  #testOperFn: TestOperFn<OpInput, O, S> | null = null;
  #testEvalFn: TestEvalFn<O, OpExpected, S> | null = null;

  constructor(suiteDraft: TestData<I, O, E, S>,
    currentInputSet: Array<OpInput>,
    currentExpectedSet: Array<OpExpected>,
    knownFns: TestFinalFns<OpInput, O, OpExpected, S>) {
    this.#suiteDraft = suiteDraft;
    this.#currentInputSet = currentInputSet;
    this.#currentExpectedSet = currentExpectedSet;
    if(knownFns) {
      this.#testOperFn = knownFns.operFn;
      this.#testEvalFn = knownFns.evalFn;
    }
  }

  operation(testFn: TestOperFn<OpInput, O>) {
    this.#testOperFn = testFn;
    return this;
  }

  evaluator(evalfn: TestEvalFn<O, OpExpected, S>) {
    this.#testEvalFn = evalfn;
    return this;
  }  

  build() {
    const document = this.#suiteDraft.document;
    const inputs = this.#currentInputSet;
    const expecteds = this.#currentExpectedSet;
    const operFn = this.#testOperFn;
    const evalFn = this.#testEvalFn;
    const conditionsFn = this.#suiteDraft.testConditions;
    const state: S = conditionsFn()
    const alltests: Array<TestCaseSummary> = [];

    this.#suiteDraft.testState = state;
    // Builds the tests
    for(let i = 0; i < this.#currentInputSet.length; i++) {

      const obs = new TestOutcomeObserver();
      const id = i+1;
      const prefix = document.review().title;
      const description =  document.review().description;

      
      const tcase: TestCase<O, OpExpected, OpInput, S> = {
        id: i+1,
        prefix: document.review().title,
        suffix: null,
        input: inputs[i]!,
        expected: expecteds[i]!,
        operfn: operFn!,
        evalfn: evalFn!,
        state
      };
      
      alltests.push({
        testId: id,
        title: `${prefix},${description}`,
        observer: obs
      });
      SetupTestCase<O, OpExpected, OpInput>(tcase, obs);
    }

    this.#suiteDraft.testState = state;
    const details = {
      alltests,
      currentSet: this.#currentInputSet,
      testData: this.#suiteDraft,
      testOperFn: this.#testOperFn!,
      testEvalFn: this.#testEvalFn!
    };
    return document.finish(details);
    
       
  }
}

