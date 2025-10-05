import { test, expect } from 'vitest'

import { SequenceGen } from './generator';

type TestData = {
  name: string
  construct: () => SequenceGen;
  checkOpers: Array<(gen: SequenceGen) => void>
}

function FinishedValOp(v: boolean) {
  return function(gen: SequenceGen) {
    expect(gen.finished()).toBe(v);
  }
}
function CurrentValOp(v: number) {
  return function(gen: SequenceGen) {
    expect(gen.current()).toBe(v);
  }
}
function NextValOp(v: number) {
  return function(gen: SequenceGen) {
    expect(gen.next()).toBe(v);
  }
}


function MakeTest(testdata: TestData) {

  const title = testdata.name;
  const mkfn = testdata.construct;
  const opers = testdata.checkOpers;

  test(title, function() {

    const gen = mkfn();

    for(const op of opers) {
      op(gen);
    }
  })
}

MakeTest({
  name: "Sequence_Construct_1",
  construct: () => new SequenceGen(0),
  checkOpers: [
    CurrentValOp(0),
    FinishedValOp(false)
  ]
})

MakeTest({
  name: "Sequence_Construct_2",
  construct: () => new SequenceGen(1, 1),
  checkOpers: [
    CurrentValOp(1),
    FinishedValOp(false)
  ]
})

MakeTest({
  name: "Sequence_Construct_3",
  construct: () => new SequenceGen(10, 2, 20),
  checkOpers: [
    CurrentValOp(10),
    FinishedValOp(false)
  ]
})

MakeTest({
  name: "Sequence_One_Arg_1",
  construct: () => new SequenceGen(1, 1),
  checkOpers: [
    CurrentValOp(1),
    NextValOp(1),
    NextValOp(2),
    NextValOp(3),
    NextValOp(4),
  ]
})

MakeTest({
  name: "Sequence_One_Arg_2",
  construct: () => new SequenceGen(1, 1),
  checkOpers: [
    CurrentValOp(1),
    NextValOp(1),
    CurrentValOp(2),
    NextValOp(2),
    CurrentValOp(3),
    NextValOp(3),
    CurrentValOp(4),
    NextValOp(4),
  ]
})

MakeTest({
  name: "Sequence_Two_Arg_1",
  construct: () => new SequenceGen(12, 2),
  checkOpers: [
    CurrentValOp(12),
    NextValOp(12),
    NextValOp(14),
    NextValOp(16),
    NextValOp(18),
  ]
})

MakeTest({
  name: "Sequence_Two_Arg_2",
  construct: () => new SequenceGen(1, 2),
  checkOpers: [
    CurrentValOp(1),
    NextValOp(1),
    CurrentValOp(3),
    NextValOp(3),
    CurrentValOp(5),
    NextValOp(5),
    CurrentValOp(7),
    NextValOp(7),
  ]
})

MakeTest({
  name: "Sequence_Three_Arg_1",
  construct: () => new SequenceGen(10, 5, 30),
  checkOpers: [
    CurrentValOp(10),
    NextValOp(10),
    NextValOp(15),
    NextValOp(20),
    NextValOp(25),
    NextValOp(30),
  ]
})

MakeTest({
  name: "Sequence_Three_Arg_2_Finished",
  construct: () => new SequenceGen(10, 5, 30),
  checkOpers: [
    CurrentValOp(10),
    NextValOp(10),
    NextValOp(15),
    NextValOp(20),
    NextValOp(25),
    NextValOp(30),
    FinishedValOp(true)
  ]
})
