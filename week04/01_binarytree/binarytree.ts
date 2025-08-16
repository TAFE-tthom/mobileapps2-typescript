// Compares a and b and the output is the difference
export type ObjectComparator<T> = (a: T, b: T) => number;

export class BinaryTreeMap<K, V> {

  //Use the comparator callback to check
  // for differences
  comparator: ObjectComparator<K>;

  constructor(comparator: ObjectComparator<K>) {
    this.comparator = comparator;
  }

  get(key: K): V | null {
    return null;
  }


  insert(key: K, value: V) {
    
  }

  remove(key: K): V | null {

    return null;
  }

}
