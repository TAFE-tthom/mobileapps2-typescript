export class CircularBuffer<T> {

  position: number = 0;
  capacity: number;
  length: number = 0;
  contents: Array<T> = [];
  

  constructor(capacity: number = 4) {
    this.capacity = capacity;
  }

  #resize() {
    const newcap = this.capacity * 2;
    const contents: Array<T> = [];
  
    for(let i = 0; i < this.length; i++) {
      contents[i] = this.contents[(this.position+i) % this.capacity];
    }
    this.contents = contents;
    this.capacity = newcap;
    this.position = 0;
  }

  enqueue(item: T) {
    if(this.length >= this.capacity) {
      this.#resize();
    }
    const position = (this.position + this.length) % this.capacity;
    this.contents[position] = item;
    this.length++;
  }

  dequeue(): T | null {
    if(this.length > 0) {
      const v = this.contents[this.position];
      
      const newposition = (this.position + 1) % this.capacity;
      this.position = newposition;
      this.length--;
      return v;
    }
    return null;
  }
  
}
