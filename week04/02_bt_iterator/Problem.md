
# Binary Trees - Iterator

Your task is to implement a binary tree that will contain both a key and a value for each of its entries. A requirement for the tree is to ensure that a comparator function can be given to it.

You will need to implement an iterator that will output the data in order.


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

Assuming you have completed the binary tree from the previous exercise, you need to implement the iterator for the binary tree.

* `inorderIterator()` - Gets an iterator that will allow for inorder access. 


## How To Test

You can test your solution using `npm test`, make sure you install the dependencies beforehand.
