

export class SequenceGen implements Iterable<number> {

  constructor(start: number, step: number = 1, end: number | null = null) {
    
  }

  current(): number {
    return 0;
  }

  finished(): boolean {

    return false;
  }

  next() {
    return { value: 0, done: false }
  }

  [Symbol.iterator]() { return this; }
  
}
