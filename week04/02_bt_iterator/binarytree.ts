// Compares a and b and the output is the difference
export type ObjectComparator<T> = (a: T, b: T) => number;


export class BinaryTreeIterator<K, V> {

  // Modify this object

  binarytree: BinaryTreeMap<K, V>;

  constructor(bt: BinaryTreeMap<K, V>) {
    this.binarytree = bt;
  }

  [Symbol.iterator]() {
    // Modify and complete code

    const ref = this;
    return {
        next: () => {
        return { value: ref.getNext(), done: true }
      }
    }
  }

  getNext(): [K, V] | undefined {
    return undefined
  }
}

  

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

  inorderIterator() {
    return new BinaryTreeIterator(this);
  }

}
