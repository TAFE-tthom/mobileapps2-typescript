import {
    TestData,
    TestFinalFns
  }
  from '../../util/TestData'

import {
    MapGeneratorFn,
    MergerMap
  } from '../../util/Merger';

import { TestFinalizer } from './finaliser';

export class TestGeneratorBuilderInitial<OpInput=any, OpExpected=any, InAggr=OpInput, ExAggr=OpExpected,
  I=any, O=any, E=any, S=any> {

  #currentInputSet: Array<InAggr> = [];
  #currentExpectedSet: Array<ExAggr> = []; 
  #suiteDraft: TestData;
  
  constructor(details: TestData<I, O, E>) {
    this.#suiteDraft = details;
  }

  /**
   * Adds both input and expected suite into the appropriate computation
   */
  withEachPair<InputMapAggr=I, ExpectedMapAggr=E>() {
    
    const inpNewSet: Array<InputMapAggr> = [];
    for(const inp of this.#suiteDraft.testInputs) {
      inpNewSet.push(inp);
    }
    const expNewSet: Array<ExpectedMapAggr> = [];
    for(const exp of this.#suiteDraft.testExpecteds) {
      expNewSet.push(exp);
    }
    return new TestGeneratorBuilderReady<InputMapAggr, ExpectedMapAggr>(
      this.review(),
      inpNewSet, expNewSet);
  }

  /**
   * CurrentSet is empty, this populates the set
   * for i of [I]
   *   (i)
   *
   */
  withEachInput<MapAggr=I>() {
    const newSet: Array<MapAggr> = [];
    for(const inp of this.#suiteDraft.testInputs) {
      newSet.push(inp);
    }
    const old = this.#currentExpectedSet;
    return new TestGeneratorBuilderReady<MapAggr>(
      this.review(),
      newSet, old);
  }

  /**
   * For CurrentSet[i] with [I][j]
   *
   * Mapping function where, given the current set
   *
   * If the CurrentSet is empty, the construction
   *   on how input data is associated is determined
   *   by the callback
   * 
   * newSet = []
   * For i, input in [I]
   *   newSet.pushAll(reMap(i, input, currentSet))
   * 
   */
  mapWithInput<MapAggr=InAggr>(mapfn: MapGeneratorFn<I, InAggr, MapAggr>) {

    const newSet: Array<MapAggr> = []
    for(let i = 0; i < this.#suiteDraft.testInputs.length; i++) {
      const inp = this.#suiteDraft.testInputs[i];
      const collection = mapfn(i, inp, this.#currentInputSet);
      for(const c of collection) {
        newSet.push(c);
      }
    }
    const old = this.#currentExpectedSet;
    return new TestGeneratorBuilderReady<MapAggr>(
      this.review(),newSet, old);
  }

  /**
   * Generates an input set using the expected set
   *
   * For e in [E]
   *   (e)
   */
  withEachExpectedForInput<MapAggr=E>() {
    const newSet: Array<MapAggr> = [];
    for(const inp of this.#suiteDraft.testExpecteds) {
      newSet.push(inp);
    }
    const old = this.#currentExpectedSet;
    return new TestGeneratorBuilderReady<MapAggr>(
      this.review(),
      newSet, old);
  }

  withEachExpectedForExpected<MapAggr=E>() {
    const newSet: Array<MapAggr> = [];
    for(const inp of this.#suiteDraft.testExpecteds) {
      newSet.push(inp);
    }
    const old = this.#currentInputSet;
    return new TestGeneratorBuilderReady<InAggr, MapAggr>(
      this.review(),
      old, newSet);
  }

  mapWithExpected<MapAggr=InAggr>(mapfn: MapGeneratorFn<E, InAggr, MapAggr>) {

    const newSet: Array<MapAggr> = []
    for(let i = 0; i < this.#suiteDraft.testExpecteds.length; i++) {
      const inp = this.#suiteDraft.testExpecteds[i];
      const collection = mapfn(i, inp, this.#currentInputSet);
      for(const c of collection) {
        newSet.push(c);
      }
    }
    const old = this.#currentExpectedSet;
    return new TestGeneratorBuilderReady<MapAggr>(
      this.review(),newSet, old);
  }

    
  mapExpectedWithExpected<MapAggr=ExAggr>(mapfn: MapGeneratorFn<E, ExAggr, MapAggr>) {
    const newSet: Array<MapAggr> = []
    for(let i = 0; i < this.#suiteDraft.testExpecteds.length; i++) {
      const inp = this.#suiteDraft.testExpecteds[i];
      const collection = mapfn(i, inp, this.#currentExpectedSet);
      for(const c of collection) {
        newSet.push(c);
      }
    }
    const old = this.#currentInputSet;
    return new TestGeneratorBuilderReady<InAggr, MapAggr>(
      this.review(),old, newSet);
  }

  
  review() {
    return this.#suiteDraft;
  }

}

export class TestGeneratorBuilderReady
  <OpInput=any, OpExpected=any, InAggr=OpInput, ExAggr=OpExpected, I=any, O=any, E=any, S=any>
  extends TestGeneratorBuilderInitial
  <OpInput, OpExpected, InAggr, ExAggr, I, O, E, S>
  {
  
  #currentInputSet: Array<InAggr>;
  #currentExpectedSet: Array<ExAggr>;
  #suiteDraft: TestData;
  #knownFns: TestFinalFns<OpInput, O, E, S> | null;

  constructor(details: TestData<I, O, E, S>,
    currentInputSet: Array<InAggr>,
    currentExpectedSet: Array<ExAggr>,
    knownsFns: TestFinalFns<OpInput, O, E, S> | null = null) {
    super(details);
    
    this.#suiteDraft = details;
    this.#currentInputSet = currentInputSet;
    this.#currentExpectedSet = currentExpectedSet;
    this.#knownFns = knownsFns;
  }

  /*
   * CurrentSet * [I]
   *
   * If the CurrentSet is not empty,
   *   for each t in CurrentSet
   *     for each i in [I]
   *       (t, i)
   *
   */
  mapEachInput() {    
    const mapFlatEachInput = (tinputs: Array<I>,
      currentInputs: Array<InAggr>) => {
      
      return tinputs.map((te) => {
        return new MergerMap<I, InAggr>(te, currentInputs)
          .flatten(); 
      })
    }; 

    const merged = mapFlatEachInput(this.#suiteDraft.testInputs,
      this.#currentInputSet);

    const old = this.#currentExpectedSet;
    return new TestGeneratorBuilderReady<Array<[InAggr,I]>>(
      this.review(),
      merged,
      old
    );
  }

  forEachOperExpected() {
    const flatter = [];
    for(const item of this.#currentInputSet) {
    }
  }


  withEachExpectedForExpected<MapAggr=E>() {
    const newSet: Array<MapAggr> = [];
    for(const inp of this.#suiteDraft.testExpecteds) {
      newSet.push(inp);
    }
    const old = this.#currentInputSet;
    return new TestGeneratorBuilderReady<InAggr, MapAggr>(
      this.review(),
      old, newSet);
  }

  /**
   * Test case with
   */
  mapEachExpectedForInput() {
    const mapFlatEachInput = (tinputs: Array<E>,
      currentInputs: Array<InAggr>) => {
      const things: Array<[InAggr, E]> = [];
      tinputs.forEach((te) => {
        const de = new MergerMap<E, InAggr>(te, currentInputs)
          .flatten();
        for(const item of de) {
          things.push(item);
        }
      })

      return things;
    }; 

    const merged = mapFlatEachInput(
      this.#suiteDraft.testExpecteds,
      this.#currentInputSet);
    const old = this.#currentExpectedSet;
    return new TestGeneratorBuilderReady<[InAggr,E]>(
      this.review(),
      merged, old,
      this.#knownFns as any); //WARN: This breaks the rules
  }

  mapEachExpectedForExpected() {
    const mapFlatEachInput = (tinputs: Array<E>,
      currentInputs: Array<ExAggr>) => {
      const things: Array<[ExAggr, E]> = [];
      tinputs.forEach((te) => {
        const de = new MergerMap<E, ExAggr>(te, currentInputs)
          .flatten();
        for(const item of de) {
          things.push(item);
        }
      })

      return things;
    }; 

    const merged = mapFlatEachInput(
      this.#suiteDraft.testExpecteds,
      this.#currentExpectedSet);

    const old = this.#currentInputSet;
    return new TestGeneratorBuilderReady<InAggr, [ExAggr,E]>(
      this.review(),
      old, merged,
      this.#knownFns as any); //WARN: This breaks the rules
  }
  finalize() {
    const nset = this.#currentInputSet;
    const eset = this.#currentExpectedSet;

    return new TestFinalizer<InAggr, ExAggr, I, O, E, S>(
      this.#suiteDraft, nset, eset, this.#knownFns! as any
      //WARN: This breaks the rules
    );
  }
}

