import { test, expect } from 'vitest'
import { BinarySearch } from './BinarySearch';

type TestData<T> = {
  name: string,
  comparator: (a: T, b: T) => number
  item: T,
  elements: Array<T>,
  expected: T | null,
}

function MakeTest<T>(testdata: TestData<T>) {

  const expected = testdata.expected;
  const title = `${testdata.name} - ${expected ? expected.toString(): 'null'}`;
  const cmpfn = testdata.comparator;
  const item = testdata.item;
  const elements = testdata.elements;

  test(title, function() {

    const result = BinarySearch(elements, item, cmpfn);

    expect(result).toEqual(expected);
  
  })
}

MakeTest({
  name: "BinarySearch<number>_Empty",
  comparator: (a, b) => a - b,
  item: 1,
  elements: [],
  expected: null
})

MakeTest({
  name: "BinarySearch<number>",
  comparator: (a, b) => a - b,
  item: 1,
  elements: [
    1
  ],
  expected: 1
})


MakeTest({
  name: "BinarySearch<number>",
  comparator: (a, b) => a - b,
  item: 1,
  elements: [
    1, 5, 10
  ],
  expected: 10
})

MakeTest({
  name: "BinarySearch<number>",
  comparator: (a, b) => a - b,
  item: 50,
  elements: [
    1, 4, 6, 8, 14, 16, 40, 50, 89, 90, 94, 100
  ],
  expected: 50
})

MakeTest({
  name: "BinarySearch<string>",
  comparator: (a: string, b: string) => a.localeCompare(b),
  item: 'One',
  elements: [
    'One', 'NegativeOne', 'Zebra'
  ],
  expected: 'One'
})

MakeTest({
  name: "BinarySearch<string>",
  comparator: (a, b) => a.localeCompare(b),
  item: 'Twenty',
  elements: [
    'Four', 'Fifty', 'Twenty','Zero'
  ],
  expected: 'Twenty'
})

MakeTest({
  name: "BinarySearch<string>",
  comparator: (a, b) => a.localeCompare(b),
  item: 'Twenty',
  elements: [
    'Four', 'Fifty','Zero'
  ],
  expected: null
})
