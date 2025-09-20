

export class Maze {

  constructor() {
    //Set defaults here or outside
  }

  getExit(): [number, number] {
    return [-1, -1];
  }

  setExit(end: [number, number]) {
    
  }

  getStart(): [number, number] {
    return [-1, -1];
  }

  setGrid(grid: Array<Array<string>>) {

  }

  drawGrid() {
    return '';
  }

  getGrid() {
    return [];
  }

  setStart(start: [number, number]) {
    
  }

  getWidth() {
    return 0;
  }

  getHeight() {
    return 0;
  }

  solve() {

    return [];
  }



  static FromString(mazeStr: string): Maze | null {
    return null;
  }
}

