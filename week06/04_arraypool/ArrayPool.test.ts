//TODO: Make out own expect wrapper
import { expect } from './dectest/util/TestCase'
import { ArrayPool,
    ArrayPoolObject,
    ArrayPoolObjectFactory }
  from './ArrayPool.ts';

import { TestDocument }
  from './dectest/TestDocument.ts'


type TestObjectData = {
  name: string;
  age: number
}

class TestObject extends ArrayPoolObject<TestObject> {

  name: string = 'Jeff';
  age: number = 30;
  
  constructor(name: string, age: number) {
    super(objPool)
    this.name = name;
    this.age = age;
  }

  setName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }
}

class TestObjectFactory implements ArrayPoolObjectFactory<TestObject> { 
  construct(...args: any) {
    return new TestObject(args[0], args[1]);
  }
}

const objPool = new ArrayPool<TestObject>(new TestObjectFactory());

//

TestDocument
  .section()
  .title(`ArrayPool - Claims`)
  .description(`
    calling .claim() and getting memory form pool
  `)
  .details()
    .conditions(() => { return objPool })
    .addPair(["Jeff", 30], {name: "Jeff", age: 30} as TestObjectData)
    .addPair(["Alice", 30], {name: "Alice", age: 30} as TestObjectData)
    .addPair(["Alice", 50], {name: "Alice", age: 50} as TestObjectData)
    .addPair(["Bob", 22], {name: "Bob", age: 22} as TestObjectData)
    .addPair(["Bob", 10], {name: "Bob", age: 10} as TestObjectData)
  .produce()
    .withEachPair()
  .finalize()
    .operation((input, state) => {
      return state.claim(input[0], input[1]);
    })
    .evaluator((actual, expected, state) => {
      const obj = actual;
      const name = obj.name;
      const age = obj.age;

      const pool = state as ArrayPool<TestObject>;
      
      expect(name).toEqual(expected.name);
      expect(age).toEqual(expected.age);
      expect(pool.getFreeSlots()).toBeLessThan(16);
    })
  .build()
  .inheritSection()
  .title('ArrayPool - Stats')
  .description('Getting stat information from the pool')
  .details()
    .setExpecteds([0, 1, 2, 3, 4])
  .next()
    .withEachExpectedForInput()
    .withEachExpectedForExpected()
  .finalize()
    .operation((_input: any, state: any) => {
      return state;
    })
    .evaluator((actual: any, expected: any,
      _state: any) => {
      const pool = actual as ArrayPool<TestObject>;
      expect(pool.getSize()).toBe(16);
      expect(pool.getUsed()).toBe(5);
      
    })
    .build()
  .finish()
