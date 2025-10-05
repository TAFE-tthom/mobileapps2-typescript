

export interface Equivalence<T> {
  isEqualTo(obj: T): boolean;
}

export interface Hashable {
  hash(): number;
}


export class HashMap<K extends Hashable & Equivalence<K>, V> {


  constructor(initial: number = 4) {
  }



  resize() {
    
  }

  insertItem(key: K, value: V) {

    
  }

  getItem(key: K) {

  }

  removeItem(key: K) {
    
  }
  
}
