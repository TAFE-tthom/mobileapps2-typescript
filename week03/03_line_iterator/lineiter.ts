
/**
 * LineIterator class, allows for iteration over a
 * series of lines
 */
export class LineIterator implements Iterable<string> {

  lines: string = '';

  constructor(lines: string) {
    this.lines = lines;
  }

  /**
   * Symbol.iterator, returns an iterator
   * which utilises the line iterator data
   */
  [Symbol.iterator]() {

    //TODO: Your logic here

    return {
      next:function() {

        //TODO: Your logic here
        
        return {
          value: '',
          done: true
        }
      }
    } 
  }
  
}
