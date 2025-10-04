
# Cartesian Product

This is an interesting problem as what you are implementing is a way of combining sets. This isn't to be confused with a union, a cartesian product is as follows:

Given two sets: A and B, for each element a in set A, and for each element b in set B, a tuple `[a, b]`. The number of elements should be |A| * |B| (A.length * B.length).

 
## Function to implement

Cartesian products are constrained to simply 2 sets, these can occur on N number of sets. Use the case with two, to build a solution that handle N sets.

```ts
function CartesianProductAny(sets: Array<Array<any>>): Array<any>;
```

Consider working on the following function first before the one above.

```ts
function CartesianProductOfTwo<A,B>(setA: Array<A>, setB: Array<B>): Array<[A, B]>;
```

## How to test

You can test your solution using `npm run test`, make sure you have installed the required dependencies with `npm install`.
