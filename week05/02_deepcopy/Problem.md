# DeepCopy

You are tasked with writing a deepcopy function for objects that will keep track of references and ensure that the referenced found again is used in place with what it is found.

It is advised you use a `DFS`, algorithm to resolve this problem.


You need to implement the function `duplicate(object: any): any`.

You will need to deal with objects that are self-referencing or have cycles. In part of using a DFS is to detect cycles within the graph and identify what new instances to put in its place.

Do note: You do not need to duplicate functions or types which would be inappropriate to duplicate.

Hint:

* Consider using a `WeakMap` and creating an association between instances, use this for checking if you have found an instance of it already and what new instance you have mapped it to.



## How to test

Test your implementation against the test cases using `npm run test`, make sure you have the correct dependencies by running `npm install`.
