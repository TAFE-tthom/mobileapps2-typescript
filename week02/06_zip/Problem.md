

# Zipper

You have been tasked with constructing an iterator that will tie collections given together. This type is known as a `Zipper`. There is a static methods that will need to be implement along with instance methods.

The idea behind `zip` is that you are able to associate two or more iterators together into one. This will then allow the object to maintain the current cursor state and step through the collections until there is no mor edata.

You will need to implement the following:

* `constructor()` - Constructor that will initialise defaults, no iterables have been given.
* `Zipper.with(iters: Array<any[]>): Zipper` - This returns a zipper object that will contain reference to all the objects given.
* `.next(): any[]` - Gets the next item in the iterator
* `.hasNext(): boolean` - Will outline if there is another element to retrieve

There is a typical assumption where the iterators added would be the same length, however this is a poor assumption to make. In the event that one iterator is smaller than the other, when there is no element to emit, `null` should be in its place. 

```ts
let zipper = Zipper.with([[1, 2, 3, 4], ["One", "Two", "Three", "Four"]]);

while(zipper.hasNext()) {
  const [n, s] = zipper.next();
  console.log(n, s); // first will be [1, "One"]
}  
```

The example above demonstrates how two collections can be used with this type. Make sure your `.next()` method call is O(1).

