
# Line Iterators

You have been given the task of creating a line iterator. In this particularly case, you will be given a string that will contain new line characters `\n`. You will need to implement the class `LineIterator` that will return a string between each new line.

Your `LineIterator` will need to return a string between the current position and the next (but not including) new line.

* `constructor(lines: string)` - Constructor that is a string that can contain many new line characters or none. If the string contains no new line character, you can safely return it.

* `[Symbol.iterator]()` - Property that returns an iterator, this iterator will have a `next` method associated to update the object's state.


## Examples

How the line iterator will work cna be shown below.

Example 1:

```
const lines = "Hello\nWorld";

const lineiter = new LineIterator(lines);

for(const e of lineiter) {
  console.log(e);
}

// Will print:
// Hello
// World
  
```

Example 2:

```
const lines = "One\nTwo\nThree\nFour\n";

const lineiter = new LineIterator(lines);

for(const e of lineiter) {
  console.log(e);
}

// Will print:
// One
// Two
// Three
// Four
// <blank>
  
```

Example 3:

```
const lines = "Jump\n\nAnd\n\nJump";

const lineiter = new LineIterator(lines);

for(const e of lineiter) {
  console.log(e);
}

// Will print:
// Jump
// <blank>
// And
// <blank>
// Jump
  
```
