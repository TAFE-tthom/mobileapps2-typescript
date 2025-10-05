
export class CSVIterator {

  constructor(data: string) {

  }

  [Symbol.iterator]() {
    return this;    
  }


  finished() {

    return false;
  }
  
  next() {
    return { value: '', done: true };  
  }  
  
}

