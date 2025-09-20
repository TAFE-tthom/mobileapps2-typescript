
# Maze

You have been tasked with writing a maze solver, this maze solver will be reading in a 2D grid of symbols from a file that will have the following symbols.

* `'X'` - This character is considered a wall and can't be moved to by the player

* `'S'` - This is the starting space in the maze. From this location, your maze solver will need to find the exit.

* `'E'` - This is the exit/endpoint of the maze.

* `' '` - With whitespace, this is considered traversable by the player but has been seen.

## Maze Description

The maze's are described using strings with each row ended by a new line. Below is an example of a maze that your game will load.

```
XXXXXXXXXXXXX\n
S         X X\n
 X X   X  X X\n
 X XX  X X  X\n
   XXX      X\n
XX     XXX  X\n
XXXXXXXXXXXEX\n
```

Given that maze starts at `'S'`, you will need to compute a route from `'S'` to `'E'`. Movement is constrained to only 4-way adjacent edges, as in moves can be: `UP`, `RIGHT`, `LEFT`, `DOWN`.


## Maze Solver and Game

Apply a `BFS` from the `S` position and find `E`. You will need to provide a path upon finding a solution to the puzzle.

Consider each adjacent space to be a connection/edge. If the adjacent space is a `' '` or `'E'`, then this space should be factored into the route, if the space is a `'X'`, this space should be ignored as it is a wall and should not be considered

Your solver should be able to find all paths that reach the end the quickest.

You will need to implement the `Maze` type and methods below.

### Maze

* `Maze.constructor()` - A class that will contain a two-dimensional grid and will be a representation of the maze.

* `static FromString(mazeStr: string): Maze | null` - Create a maze object from a string. If the string is empty or contains invalid characters, it will return null.

* `setGrid(grid: Array<Array<string>>): void` - Sets the grid and will recompute the start, end, width and height.

* `getGrid(): Array<Array<string>>` - Will return the grid of characters (in TS/JS, strings).

* `drawGrid(): string` - Draw the grid as a string, same the string format.

* `getStart(): [number, number]` - Gets a x,y tuple of the starting position.

* `setStart(): void` - Sets the starting position of the maze.

* `getExit(): [number, number]` - Gets a x,y tuple of the end position.

* `setExit(): void` - Sets the end position of the maze.

* `getHeight(): number` - Gets the height of the maze.

* `getWidth(): number` - Gets the width of the maze.

* `solve()` - This will solve the maze that is currently set to the `MazeGame` instance. Use a BFS or DFS to compute a route from the start and to the end.


## How to test

You can test your program but running `npm test`, if you encounter an error, make sure you have installed the dependencies with `npm install`.
