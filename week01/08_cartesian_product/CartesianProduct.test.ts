import { test, expect } from 'vitest';
import { CartesianProductAny } from './CartesianProduct';

type ExpectedSet<A, B, C, D> = Array<[A, B]> | Array<[A, B, C]>
  | Array<[A, B, C, D]>;

type TestData<A, B, C, D> = {
  name: string,
  sets: {
    setA: Array<A>,
    setB: Array<B>,
    setC?: Array<C>,
    setD?: Array<D>
  },
  expected: ExpectedSet<A, B, C, D>
};

function SetMatch(setA: Array<any>, setB: Array<any>) {
  const aLen = setA.length;
  const bLen = setB.length;

  expect(aLen).toBe(bLen);

  for(let i = 0; i < setA.length; i++) {
    const a = setA[i];
    expect(setB).toContainEqual(a);
  }
  
}

function MakeTest<A, B, C, D>({
  name,
  sets,
  expected
}: TestData<A, B, C, D>) {

  test(name, function() {
    const allSets: Array<any> = [sets.setA, sets.setB];
      
    if(sets.setC) {
      allSets.push(sets.setC);
    }
    if(sets.setD) {
      allSets.push(sets.setD);
    }
    
    const result = CartesianProductAny(allSets);
    SetMatch(expected, result);
  })
}

MakeTest({
  name: "CartesianProduct - 2 Number Set, 1 String Set",
  sets: {
    setA: [1, 2],
    setB: ['One'],
    setC: [3, 4]
  },
  expected: [
    [1, 'One', 3],
    [1, 'One', 4],
    [2, 'One', 3],
    [2, 'One', 4],
  ]
})

MakeTest({
  name: "CartesianProduct - 3 Number Set, 1 String Set",
  sets: {
    setA: [1, 2],
    setB: ['One'],
    setC: [3, 4],
    setD: [10, 20]
  },
  expected: [
    [1, 'One', 3, 10],
    [1, 'One', 3, 20],
    [1, 'One', 4, 10],
    [1, 'One', 4, 20],
    [2, 'One', 3, 10],
    [2, 'One', 3, 20],
    [2, 'One', 4, 10],
    [2, 'One', 4, 20],
  ]
})

MakeTest({
  name: "CartesianProduct - 1 Number Set, 1 String Set",
  sets: {
    setA: [1, 2],
    setB: ['One', 'Two']
  },
  expected: [
    [1, 'One'],
    [1, 'Two'],
    [2, 'One'],
    [2, 'Two']
  ]
})

MakeTest({
  name: "CartesianProduct - Two Number Sets",
  sets: {
    setA: [1, 2, 3],
    setB: [3, 4, 5]
  },
  expected: [
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 3],
    [3, 4],
    [3, 5]
  ]
})

MakeTest({
  name: "CartesianProduct - Three Number Sets",
  sets: {
    setA: [1, 2, 3],
    setB: [4, 5, 6],
    setC: [7, 8, 9],
  },
  expected: [
    [1, 4, 7],
    [1, 4, 8],
    [1, 4, 9],
    [1, 5, 7],
    [1, 5, 8],
    [1, 5, 9],
    [1, 6, 7],
    [1, 6, 8],
    [1, 6, 9],
    [2, 4, 7],
    [2, 4, 8],
    [2, 4, 9],
    [2, 5, 7],
    [2, 5, 8],
    [2, 5, 9],
    [2, 6, 7],
    [2, 6, 8],
    [2, 6, 9],
    [3, 4, 7],
    [3, 4, 8],
    [3, 4, 9],
    [3, 5, 7],
    [3, 5, 8],
    [3, 5, 9],
    [3, 6, 7],
    [3, 6, 8],
    [3, 6, 9],
  ]
})
