

# Iterator

You have been tasked with constructing an iterator object for your LinkedList,
you will need implement the following methods.

You will need to implement the following for your iterator:

* `constructor(list: LinkedList)` - Accepts a linkedlist object that it can use  
* `.next(): T | null` - Gets the next item in the iterator. 
* `.hasNext(): boolean` - Will outline if there is another element to retrieve

Your linkedlist should now contain a method called:

* `getIterator(): LinkedListIterator` - Returns a linkedlist iterator

The advantage of an iterator is that it can be used to maintain the current state of iteration.

```ts
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

let it = list.getIterator();

while(it.hasNext()) {
  const e = it.next();
  console.log(e); // first will be 1, then 2, then 3
}  
```

The example above demonstrates how an iterator will work. Make sure your `.next()` method call is O(1).
