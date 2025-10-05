import { test, expect } from 'vitest';

import { CSVIterator } from './CSVIter';

type TestData = {
  name: string
  suffix: string
  opers: Array<(iter: CSVIterator, state: Array<string>) => void>
  data: string
  expected: Array<string>
}

function IteratorOp() {
  return function(iter: CSVIterator, collection: Array<string>) {
    for(const s of iter) {
      collection.push(s);
    }
  }
}

function FinishedOp(v: boolean) {
  return function(iter: CSVIterator, _collection: Array<string>) {
    expect(iter.finished()).toBe(v);
  }
}

function NextOp() {
  return function(iter: CSVIterator, collection: Array<string>) {
    const nv = iter.next();
    collection.push(nv);
  }
}


function MakeTest(tdata: TestData) {

  const title = `${tdata.name} - ${tdata.suffix}`;

  const data = tdata.data;
  const opers = tdata.opers;
  const expected = tdata.expected;
  
  test(title, function() {

    const iter = new CSVIterator(data);
    const collection: Array<string> = [];

    for(const op of opers) {
      op(iter, collection);
    }

    expect(collection).toEqual(expected);

    
  })
}

MakeTest({
  name: "CSVIterator",
  suffix: 'Just 1',
  
  data: 'jeff',
  expected: [
    'jeff'
  ],
  opers: [
    NextOp(),
  ]
})


MakeTest({
  name: "CSVIterator",
  suffix: 'Just 1',
  
  data: 'jeff',
  expected: [
    'jeff'
  ],
  opers: [
    NextOp(),
  ]
})

MakeTest({
  name: "CSVIterator",
  suffix: 'Just 2',
  
  data: 'jeff,jeffington',
  expected: [
    'jeff',
    'jeffington'
  ],
  opers: [
    NextOp(),
    NextOp(),
  ]
})

MakeTest({
  name: "CSVIterator",
  suffix: 'Just 2 and Finished',
  
  data: 'jeff,jeffington',
  expected: [
    'jeff',
    'jeffington'
  ],
  opers: [
    NextOp(),
    NextOp(),
    FinishedOp(true)
  ]
})

MakeTest({
  name: "CSVIterator",
  suffix: '4 parts',
  data: 'jeff,jeffington,0444332211,kelly',
  expected: [
    'jeff',
    'jeffington',
    '0444332211',
    'kelly'
  ],
  opers: [
    NextOp(),
    NextOp(),
    NextOp(),
    NextOp(),
    FinishedOp(true)
  ]
})


MakeTest({
  name: "CSVIterator",
  suffix: 'Two lines',
  data: `jeff,jeffington,jeff@jeff.co,0444332211\nkelly,kellyson,kelly@live.com,0444233357\n`,
  expected: [
    'jeff',
    'jeffington',
    'jeff@jeff.co',
    '0444332211',
    'kelly',
    'kellyson',
    'kelly@live.com',
    '0444233357'
  ],
  opers: [
    NextOp(),
    NextOp(),
    NextOp(),
    NextOp(),
    NextOp(),
    NextOp(),
    NextOp(),
    NextOp(),
    FinishedOp(true)
  ]
})


MakeTest({
  name: "CSVIterator",
  suffix: 'Two lines',
  data: `jeff,jeffington,jeff@jeff.co,0444332211\nkelly,kellyson,kelly@live.com,0444233357\n`,
  expected: [
    'jeff',
    'jeffington',
    'jeff@jeff.co',
    '0444332211',
    'kelly',
    'kellyson',
    'kelly@live.com',
    '0444233357'
  ],
  opers: [
    IteratorOp()
  ]
})




