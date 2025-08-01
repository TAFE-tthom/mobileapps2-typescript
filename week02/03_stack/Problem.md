# Stack

You are tasked with constructing a stack data structure. Following a similar pattern to the Queue data structure you constructed prior, you will need to implement the following
methods.

* `push(element: T)` - Puts an element to the top of the stack
* `pop(): T | null` - Removes an element from the top of the stack, if the stack is empty, null is returned
* `peek(): T | null` - Returns an item at the top of the list, if the stack is empty, null is returned
* `Length(): number` - Returns the number of elements on the stack

"Hang on, what is that T symbol?"

This is going to be an introduction to `Type Parameters` and `Generics`. When using collections prior such as `Array` you have had to provide a `type argument` to the type. Usually in the form

```
strs: Array<string> = ...
```

`Array` is the collection type and the type argument given is `string`. It indicates that this list will contain only strings.

You will need to implement your Stack class to support this.

## How to test?

You are able to test your solution against a suite of test cases, using `npm test`.


