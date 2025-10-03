import { TestDocumentIncomplete }
  from '../incomplete';

import {
  TestConditionsInit,
  TestData,
  TestDetails,
  TestFinalFns }
  from '../../util/TestData';

import {
    TestGeneratorBuilderInitial,
    TestGeneratorBuilderReady
  } from './generators';
import { TransitionNextData, TransitionObject } from '../transition';


/**
 * Builds up the input and the conditions
 * for the following test cases
 */
export class TestDetailsBuilder<I=any, O=any,
  E=any, S=any> {

  #document: TestDocumentIncomplete;
  #testConditions: TestConditionsInit<S> = () => (this.#testState as S);
  #testInputs: Array<I> = [];
  #testExpecteds: Array<E> = [];
  #testOutputs: Array<O> = []
  #testState: any = {};

  constructor(document: TestDocumentIncomplete,
    details: TestData<I, O, E, S> | null = null) {
    this.#document = document;
    if(details) {
      this.#testInputs = details.testInputs;
      this.#testExpecteds = details.testExpecteds;
      this.#testState = details.testState;
      this.#testOutputs = details.testOutputs; //TODO: NOT USED YET
    }
  }

  conditions(condfn: TestConditionsInit<S>) {
    this.#testConditions = condfn;
    return this;
  }

  setInputs(data: Array<I>) {
    this.#testInputs = data;
    return this;
  }
  
  addInputs(data: Array<I>) {
    this.#testInputs = this.#testInputs.concat(data);
    return this;
  }

  addInput(inp: I) {
    this.#testInputs.push(inp);
    return this;
  }

  expecteds(data: Array<E>) {
    this.#testExpecteds = data.concat(this.#testExpecteds);
    return this;
  }

  setExpecteds(data: Array<E>) {
    this.#testExpecteds = data;
    return this;
  }

  addPair(input: I, expected: E) {
    this.addInput(input);
    this.addExpected(expected);
    return this;
  }

  addExpected(e: E) {
    this.#testExpecteds.push(e);
    return this;
  }

  produce<OpInput=any, OpExpected=any>() {
    if(this.#canExpand()) {
      return new TestGeneratorBuilderInitial<OpInput,
        OpExpected>(this.review());
    }else {
      const reason = 'Missing inputs, expected or operation setting';
      throw new Error("Unable move to generator: " + reason);
    }
  }

  next() {
    return this.produce();
  }

  review() {
    return {
      document: this.#document,
      testInputs: this.#testInputs,
      testExpecteds: this.#testExpecteds,
      testConditions: this.#testConditions,
      testOutputs: this.#testOutputs,
      testState: this.#testState
    }
  }

  #canExpand() {
    return this.#testInputs.length > 0 ||
      this.#testExpecteds.length > 0;
  }
  
}

export class TestDetailsInheritedBuilder
  <I=any, O=any, E=any, S=any, OpInput=any>
  extends TestDetailsBuilder<I, O, E, S> {

  #finalFns: TestFinalFns<OpInput, O, E, S>
  
  constructor(document: TestDocumentIncomplete,
    testData: TestData<I, O, E, S>,
    finalFns: TestFinalFns<OpInput, O, E, S>) {
    
    super(document, testData);

    this.#finalFns = finalFns;
  }

  static fromDetails(
    tobj: TransitionNextData) {
    const testDetails = tobj.testDetails!;
    return new TestDetailsInheritedBuilder(
      testDetails.testData.document,
      testDetails.testData,
      {
        operFn: testDetails.testOperFn,
        evalFn: testDetails.testEvalFn
      });
  }
  
  next() {
    const reviewData = this.review();
    return new TestGeneratorBuilderReady<I, E>(
      this.review(),
      reviewData.testInputs, reviewData.testExpecteds,
      this.#finalFns as any); //WARN: This is unsafe
  }
}



