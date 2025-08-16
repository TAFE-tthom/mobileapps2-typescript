
# Binary Trees

Your task is to implement a binary tree that will contain both a key and a value for each of its entries. A requirement for the tree is to ensure that a comparator function can be given to it.


```ts

// Compares a and b and the output is the difference
type ObjectComparator<T> = (a: T, b: T) => number;

class BinaryTreeMap<K, V> {

  comparator: ObjectComparator<K>;

  constructor(comparator: ObjectComparator<K>) {
    this.comparator = comparator;
  }
  
}
  
```

Your binary tree should implement the following methods:

* `insert(key: K, value: V)` - Inserts a key and value pair into the binary tree.

* `get(key: K): V | null` - Gets a value based on the key given, if the key does not exist, then null is returned.

* `remove(key: K): V | null` - Gets the value based on the key, removes it from the tree and also returns it, if the key does not exist, it will return null.


## How To Test

You can test your solution using `npm test`, make sure you install the dependencies beforehand.
