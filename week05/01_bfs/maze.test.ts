import { Maze } from './maze';
import { test, expect } from '@jest/globals';


const level1 =`\
XXXXXXXXXXXXX
S         X X
 X X   X  X X
 X XX  X X  X
   XXX      X
XX     XXX  X
XXXXXXXXXXXEX`


const level2 =`\
XXXXXXXXX
      X X
SXXX  X X
XXXXX   X
XXXXXXXEX`


type DoTestData = {
  title: string,
  state: any,
  operations: Array<{
    suffix: string,
    input: any,
    expected: (state: any) => any,
    fn: (input: any, state: any) => any,
  }>
}

function DoTest({
  title,
  state,
  operations
}: DoTestData) {
  for(let i = 0; i < operations.length; i++) {
    const { suffix, input, expected, fn } = operations[i];
    test(`${title} - ${suffix}` , function() {
      let result = fn(input, state);
      expect(result).toEqual(expected(state));
      }
    );
  }
}

function MazeConstruction(
  cstrct: () => Maze,
  final: (m: Maze) => any,
  applications: Array<(m: Maze)=>void>) {
  const m = cstrct();
  for(const apfn of applications) {
    apfn(m);
  }
  return final(m);
}


DoTest({
  title: "Maze - Variant 1",
  state: {
    maze: MazeConstruction(
        () => { return new Maze(); },
        (m) => { return m; },
        [(m) => m.setStart([0, 1]),
        (m) => m.setExit([11, 6]),
        (m) => m.setGrid([
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
          ['S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X'],
          [' ', 'X', ' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', 'X', ' ', 'X'],
          [' ', 'X', ' ', 'X', 'X', ' ', ' ', 'X', ' ', 'X', ' ', ' ', 'X'],
          [' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
          ['X', 'X', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', 'X'],
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'E', 'X'],
        ])]),
  },
  operations: [
    {
      input: level1,
      suffix: 'drawGrid()',
      expected: (state) => state.maze.drawGrid(),
      fn: (input: any, _state: any) => {
        const maze = Maze.FromString(input);
        return maze!.drawGrid();
      }
    }
  ]
})


DoTest({
  title: "Maze - Variant 2",
  state: {
    maze: MazeConstruction(
        () => { return new Maze(); },
        (m) => { return m; },
        [(m) => m.setStart([0, 2]),
        (m) => m.setExit([7, 4]),
        (m) => m.setGrid([
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
          [' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X'],
          ['S', 'X', 'X', 'X', ' ', ' ', 'X', ' ', 'X'],
          ['X', 'X', 'X', 'X', 'X', ' ', ' ', ' ', 'X'],
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'E', 'X'],
        ])]),
  },
  operations: [
    {
      input: level2,
      suffix: 'drawGrid()',
      expected: (state) => state.maze.drawGrid(),
      fn: (input: any, _state: any) => {
        const maze = Maze.FromString(input);
        return maze!.drawGrid();
      }
    },
    {
      input: {},
      suffix: 'getWidth()',
      expected: (_state) => 9,
      fn: (_input: any, state: any) => {
        return state.maze.getWidth();
      }
    },
    {
      input: {},
      suffix: 'getHeight()',
      expected: (_state) => 5,
      fn: (_input: any, state: any) => {
        return state.maze.getHeight();
      }
    },
    {
      input: {},
      suffix: 'getStart()',
      expected: (_state) => [0, 2],
      fn: (_input: any, state: any) => {
        return state.maze.getStart();
      }
    },
    {
      input: {},
      suffix: 'getExit()',
      expected: (_state) => [7, 4],
      fn: (_input: any, state: any) => {
        return state.maze.getExit();
      }
    },
  ]
})




DoTest({
  title: "MazeGame - Variant 1",
  state: {
    game: MazeConstruction(
        () => { return new Maze(); },
        (m) => { return m; },
        [(m) => m.setStart([0, 1]),
        (m) => m.setExit([11, 6]),
        (m) => m.setGrid([
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
          ['S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X'],
          [' ', 'X', ' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', 'X', ' ', 'X'],
          [' ', 'X', ' ', 'X', 'X', ' ', ' ', 'X', ' ', 'X', ' ', ' ', 'X'],
          [' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
          ['X', 'X', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', 'X'],
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'E', 'X'],
        ])]),
  },
  operations: [
    {
      input: level1,
      suffix: 'draw()',
      expected: (state) => { return (

`\
XXXXXXXXXXXXX
S         X X
 X X   X  X X
 X XX  X X  X
   XXX      X
XX     XXX  X
XXXXXXXXXXXEX
`

)},
      fn: (input: any, state: any) => {
        const maze = Maze.FromString(input);
        state.game = maze;
        return maze!.drawGrid();
      }
    },
    {
      input: {},
      suffix: 'solve()',
      expected: (state) => LevelWalk(state.game.getGrid(),
        state.userSolution, 17, [0, 1], [11, 6]),
      fn: (_input: any, state: any) => {
        const solution = state.game.solve();
        state.userSolution = solution;
        return solution;
      }
    },
  ]
})


DoTest({
  title: "MazeGame - Variant 2",
  state: {
    game: MazeConstruction(
        () => { return new Maze(); },
        (m) => { return m; },
        [(m) => m.setStart([0, 2]),
        (m) => m.setExit([7, 4]),
        (m) => m.setGrid(
        [
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
          [' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X'],
          ['S', 'X', 'X', 'X', ' ', ' ', 'X', ' ', 'X'],
          ['X', 'X', 'X', 'X', 'X', ' ', ' ', ' ', 'X'],
          ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'E', 'X'],
        ])
      ]),
  },
  operations: [
    {
      input: level2,
      suffix: 'draw()',
      expected: (_state) => { return (
`\
XXXXXXXXX
      X X
SXXX  X X
XXXXX   X
XXXXXXXEX
`
)},
      fn: (input: any, state: any) => {
        const maze = Maze.FromString(input);
        state.game = maze;
        return maze!.drawGrid();
      }
    },
    {
      input: {},
      suffix: 'solve()',
      expected: (state) => LevelWalk(state.game.getGrid(),
        state.userSolution, 12, [0, 2], [7, 4]),
      fn: (_input: any, state: any) => {
        const solution = state.game.solve();
        state.userSolution = solution;
        return solution;
      }
    },
  ]
})

function LevelWalk(grid: Array<Array<string>>,
  attempt: Array<[number, number]>, expectedSteps: number,
  gridStart: [number, number], gridEnd: [number, number]) {
    
  let prev: [number, number] | null = null;
  let start = attempt[0];
  let end = attempt[attempt.length-1];
  for(let i = 0; i < attempt.length; i++) {
    const current = attempt[i];

    const validCh = grid[current[1]][current[0]];
    expect(validCh).not.toBe('X');
    
    if(prev) {
      const diff = (
        Math.abs(current[0] - prev[0]) +
        Math.abs(current[1] - prev[1])
      );
      //Need to ensure steps are accurate
      expect(diff).toBe(1);
    }
    prev = current;
  }
  expect(start).toEqual(gridStart);
  expect(end).toEqual(gridEnd);
  expect(attempt.length).toBe(expectedSteps);

  return attempt;
}
