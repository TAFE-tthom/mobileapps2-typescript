
# Priority Queue

As an extension to your queue, you will need to implement a queue that will select the next minimum. This is an important data structure and combination as it is leveraged in many common algorithms.


## Queue vs Priority Queue

A queue will simply dequeue the element at the front of the queue, this is not establishing any kind of priority or weighting on the selection of an element. This is useful if we can't do this but there are cases where we may want to find the next cheapest item or be able to triage.

When it comes to algorithms like finding the shortest path or even sorting using a data-structure, a priority queue usually shows up to solve this problem.


## What needs to be done

Your priority queue will also need to support a `comparator` as outlined in the scaffold. This comparator will be able to compare two elements within the queue and be used find the next minimum.

`constructor(cmpfn: PriorityQueueComparator<T>)`, make sure you utilise the comparator within the `dequeueMin` method to select the next smallest.

You will need to implement a `dequeueMin` method with a priority queue, assuming you have implemented a queue, you could in theory inherit from that class.

`dequeueMin(): T | null`, returns the next object with the smallest weighting/


## How to test

You can test your solution by running `npm run test`, make sure you install the required dependencies before running the test cases with `npm install`.
