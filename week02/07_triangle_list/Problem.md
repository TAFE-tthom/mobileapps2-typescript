# Triangle List

This is a bit of a quirky list, in this particular case where we have list which will represent a right-angle triangle. One of the quirks of a list like this is that it is indexed using both `i` and `j`.

Each row of a triangle list has the number of elements that the row holds. For example:

* Row 1, has 1 element
* Row 2, has 2 elements
* Row 3, has 3 elements...

This list is still 0 index based, so row 1, corresponds to index 0.


You will need to support the following operations:

* `append(item: T)` - Adds an element to the next available position of the triangle.

* `get(i: number, j: number): T | null` - Gets an element using i,j. If j > i, the method should throw an error.

* `set(i: number, j: number, item: T)` - Set an element using i,j coordinates. If j > i, the method should throw an error.


* `remove(i: number, j: number): T | null` - Removes an element using i,j coordinates. All elements ahead of i,j should be shifted to ensure that there aren't any holes in the middle of the list.


## How to test

You can test your solution by running `npm run test`. Make sure you install the necessary dependencies using `npm install`.
