
# Binary Search

You are to implement a binary search function that utilises type parameters. The type parameter utilised will provide a gaurantee on the type within the array matching the comparator given.


Implement the following function:

```ts
function BinarySearch<T>(entries: Array<T>, item: T,
  comparator: (a: T, b: T) => number)
```


## How to test

You can test your implementation with `npm run test`, make sure you have installed the required dependencies with `npm install`.
