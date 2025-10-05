import { test, expect } from 'vitest';
import { LRUCache, LRUEntryMeta } from './LRU';

type TestObjectDetails = {
  name: string,
  age: number
}

const objectpairs: Array<[string, number]> = [
  ['jeff', 32],
  ['alice', 44],
  ['bob', 55],
  ['janice', 18],
  ['kelly', 88]
]


class TestObject implements LRUEntryMeta<TestObjectDetails> {

  #seleectedIdx = Math.floor(Math.random() * objectpairs.length)
  #hiddenDetails = objectpairs[this.#seleectedIdx];
  
  static ForceNew(idx: number): TestObject {
    const nojt = new TestObject();
    nojt.#forceidx(idx);
    return nojt;
  }

  #forceidx(idx: number) {
    this.#seleectedIdx = idx;
    this.#hiddenDetails = objectpairs[idx];
  }

  retrieve() {
    const details = this.#hiddenDetails;
    return {
      name: details[0],
      age: details[1]
    }
  }
}

type TestStateObject = {
  counter: number,
  object: any
}

type TestState = {
  count: number,
  objects: Array<TestStateObject>
  lastActives: any
}


type TestOper<M extends LRUEntryMeta<T>, T> = (cache: LRUCache<M, T>, state: TestState) => void;


type TestData<M extends LRUEntryMeta<T>, T> = {
  name: string,
  construct: <M extends LRUEntryMeta<T>, T>() => LRUCache<M, T>,
  opers: Array<TestOper<M, T>>  
}

function MakeTest(testdata: TestData<TestObject, TestObjectDetails>) {

  const title = `${testdata.name} - Test`;
  const cnfn = testdata.construct;
  const opers = testdata.opers;
  
  test(title, function() {

    const lru: LRUCache<TestObject, TestObjectDetails> = cnfn();
    const state: TestState = {
      count: 1,
      objects: [],
      lastActives: {}
    };

    for(const op of opers) {
      op(lru, state);
    }
    
  })
}

function AddOp(idx: number) {
  return function(lru: LRUCache<TestObject, TestObjectDetails>,
    _state: TestState) {
    lru.add(TestObject.ForceNew(idx));
  }
}

function UseOp(key: number) {
  return function(lru: LRUCache<TestObject, TestObjectDetails>,
    state: TestState) {
    lru.use(key);
  }
}

function InspectKeyIsNullOp(key: number) {
  return function(lru: LRUCache<TestObject, TestObjectDetails>,
    _state: TestState) {

    const obj = lru.use(key);
    expect(obj).toEqual(null);
  }
}

function InspectKeyIsNotNullOp(key: number) {
  return function(lru: LRUCache<TestObject, TestObjectDetails>,
    _state: TestState) {

    const obj = lru.use(key);
    expect(obj).not.toEqual(null);
  }
}

function InspectStateIsNotNullOp(key: number) {
  return function(lru: LRUCache<TestObject, TestObjectDetails>,
    _state: TestState) {
    const obj = lru.use(key);
    expect(obj).not.toEqual(null);
  }
}

MakeTest({
  name: "LRUCache, 1",
  construct: () => new LRUCache(),
  opers: [
    AddOp(1),
    InspectKeyIsNotNullOp(0),
  ],
})


MakeTest({
  name: "LRUCache, 2",
  construct: () => new LRUCache(),
  opers: [
    AddOp(1),
    AddOp(2),
    InspectKeyIsNotNullOp(0),
    InspectKeyIsNotNullOp(1),
  ],
})


MakeTest({
  name: "LRUCache, 3",
  construct: () => new LRUCache(),
  opers: [
    AddOp(1),
    AddOp(2),
    AddOp(3),
    AddOp(4),
    InspectKeyIsNotNullOp(0),
    InspectKeyIsNotNullOp(1),
    InspectKeyIsNotNullOp(2),
    InspectKeyIsNotNullOp(3),
  ],
})

MakeTest({
  name: "LRUCache, 4 - Check Eviction",
  construct: () => new LRUCache(),
  opers: [
    AddOp(1),
    AddOp(2),
    AddOp(3),
    AddOp(4),
    InspectKeyIsNotNullOp(0),
    InspectKeyIsNotNullOp(1),
    InspectKeyIsNotNullOp(2),
    InspectKeyIsNotNullOp(3),
    AddOp(3),
    AddOp(3),
    AddOp(4),
    AddOp(4),
    AddOp(4),
    AddOp(3),
    InspectKeyIsNullOp(0),
    InspectKeyIsNullOp(1),
    InspectKeyIsNotNullOp(2),
  ],
})

MakeTest({
  name: "LRUCache, 5 - Evict 2 of the last 4 added",
  construct: () => new LRUCache(),
  opers: [
    AddOp(1),
    AddOp(2),
    AddOp(3),
    AddOp(4),

    UseOp(0),
    UseOp(1),
    
    AddOp(3),
    AddOp(4),
    
    UseOp(0),
    UseOp(1),

    AddOp(4),
    AddOp(4),
    
    UseOp(0),
    UseOp(1),

    AddOp(3),
    AddOp(3),
    InspectKeyIsNotNullOp(0),
    InspectKeyIsNotNullOp(1),
    InspectKeyIsNotNullOp(8),
    InspectKeyIsNotNullOp(9),
  ],
})

/*
const lru = new LRUCache<TestObject, TestObjectDetails>(4, 8);

const keys: Array<number> = [];

keys.push(lru.add(new TestObject()));
keys.push(lru.add(new TestObject()));
lru.use(0);
keys.push(lru.add(new TestObject()));
keys.push(lru.add(new TestObject()));


lru.use(0);
keys.push(lru.add(new TestObject()));
keys.push(lru.add(new TestObject()));
lru.use(0);
lru.use(1);

keys.push(lru.add(new TestObject()));
lru.use(0);
keys.push(lru.add(new TestObject()));
*/
