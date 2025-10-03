
/**
 * MapGenerator that is used
 * as part of remapping operations
 */
export type MapGeneratorFn<T, TD=any, C=TD>
  = (index: number, item: T, testdata: Array<TD>)
  => Array<C>;


/**
 * Cartesian-Product Merger
 * Ensuring we can form a new collection
 * out of it
 */
export class MergerMap<A, B> {
  items: Array<B>;
  a: A; 
  

  constructor(a: A, items: Array<B>) {
      this.a = a;
      this.items = items;
  }

  flatten(): Array<[B, A]> {
    return this.items.map((e) => [e, this.a]);
  }

}

