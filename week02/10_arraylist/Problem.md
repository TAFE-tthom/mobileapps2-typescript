
# Array List

An array list or dynamic array is an array that is resizable. While the `Array` type within JS/TS is a kind of a dynamic array. We will be ensuring that we have certain number of spots available in the dynamic array.

An array list has the following fields and methods:

* `constructor(initial: number = 4)`, Constructor with a default value of the initial capacity.

* `capacity`, The set capacity of the array list.

* `length`, The number of elements in the array.

* `append(item: T)`, Adds an element to the end of the array list.

* `prepend(item: T)`, Adds an element to the beginning of the array list, this will have a cost of shifting all the elements one place.

* `insert(index: number, item: T)`, If within range, inserts an element at a particular index, shifts elements after elected index.

* `set(index: number, item: T)`, If within range, updates the element at a specific index.

* `first(): T | null`, Gets the first element in the array list. 

* `last(): T | null`, Gets the last element in the array list.

* `getItem(index: number): T | null`, If within range, gets an element at a particular index.

* `resize()`, Used when `length` is greather than or equal to `capacity`. Will occur on `prepend`, `append` or `insert`. `capacity` is doubled.


## How to test

Make sure you test your solution against the test cases with `npm run test`, make sure you have the dependencies required by running `npm install`.
