
# Predicate

You are to implement a generalised function for running a predicate on an array of elements.

```ts

function filter<T>(items: Array<T>, predicate: (e: T) => boolean): Array<T>;
```

Your solution should be between 5 to 10 lines. This is to go through some basics of generics with callbacks.

The `filter` function is used to produce a new array where only elements that have met the `predictate` function's criteria (as in the return value when given an element from `items`, is true.


## How to test

To test your implementation, you can run `npm run test`, make sure you have installed the required dependencies with `npm install`.
