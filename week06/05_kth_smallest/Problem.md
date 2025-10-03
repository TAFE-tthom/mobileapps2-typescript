# Finding kth smallest element

Design an algorithm and write a function `kthSmallestElement(<elements>, k)`  to efficiently find the kthkth smallest element in an unsorted list of elements.

That is, the element that would be at the kthkth index if the list is sorted.

Your task is to design a divide and conquer algorithm that runs in expected linear time (expected O(n) time) for this problem.

We know we can find the minimum and maximum in linear time, but the question is how do we solve it for general k?


## Getting started designing the algorithm

Revise the two sorting algorithms you learnt in the divide and conquer lecture.

Then ask yourself, as you walk through both of these sorting algorithms, where would the kth smallest element be?

Here are some examples you could try walking through the sorting algorithms with:

* Find the 3rd smallest element of [2, 0, 7, 1, 5, 6, 3, 4]
* Find the 4th smallest element of [2, 0, 2, 1, 5, 14, 0, 12]

The solution to this problem is a modification of one of these sorting algorithms.

There is another hint at the bottom of the description. You should try your best first before looking at the hint.

Example computations:

* 0th smallest element of a list is the minimum value.
* 1st smallest element of the list [3, -2, 0, -1, 7] is -1.
* 3rd smallest element of the list [2, 2, 8, 8, 4, 4, 7, 7] is 4.


## Hint

The running time of both quick sort and merge sort are [expected] O(nlog⁡n)O(nlogn). Our goal is an [expected] O(n)O(n) running time through a modification of one of these algorithms. This means the modification has to make it asymptotically quicker. There are two ways we could make it quicker:

    Either by cutting down the time for the divide as well as the merge stages to a running time strictly less than linear time (e.g. O(1) or O(logn) or O(n) ),

Or by discarding a fraction of the elements before the conquer stage (e.g. discarding n/4n/4 or n/2n/2 elements). In other words, there are a fraction of the elements that we do not recur on / are not part of the conquer stage.
