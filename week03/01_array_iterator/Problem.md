
# Array Iterator

You have been tasked with constructing an iterator object for array.

You will need to implement the following for your iterator:

* `constructor(array: Array<number>)` - 
* `.next()` - Gets the next item in the iterator. 
* `.hasNext()` - Will outline if there is another element to retrieve

```ts
let arrayIter = new ArrayIterator([1, 2, 3, 4]);


while(arrayIter.hasNext()) {
  const e = arrayIter.next();
  console.log(e); // first will be 1, then 2, then 3, then 4
}  
```

The example above demonstrates how an iterator will work. Make sure your `.next()` method call is O(1).

Implement an iterator to be used with an array and test it against the set of testcases.

