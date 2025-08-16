
# Min Heap

You have been tasked with building a min-heap. A min-heap (or even a max-heap) is a kind of binary tree with some strict properties.

* It is not simply ordered like a binary search tree, Each child node must contain an element that is greater than the parent (for a min-heap). It isn't applying the typical BST property where left is less than the current node and right is greater than it.


Example of parent-key < keys of children:
```
      10
    /    \
   20    25
```

* It must be a complete binary tree and balanced. The `insert()` and `removeMin()` methods will ensure that this is the case.

Example:

At this point, we have 4 nodes, and the next node will be the right child of 20.

```
       10
     /    \
   20     25
  /    
43    
```

*How does `insert(19)` work?*

We have some steps here now.

```
       10
     /    \
   20     25
  /  \  
43    19
```

But we would be break the rule, so we need to check if it is smaller than the parent and swap.

```
  
       10
     /    \
   19     25
  /  \  
43    20
```

Since 19 is > 10, it is in the right place, if it was 5, then we would swap with 10.

*What about `removeMin`?*

Let's take the state where the heap is:

```
  
       10
     /    \
   19     25
  /  \  
43    20
```

We would call `removeMin()` which would return 10, now we need to replace it with something. We start with `20`


```
       20
     /    \
   19     25
  /    
43    
```

However, we can see that 20 is > 19, so we need to swap it with 19.


```
       19
     /    \
   20     25
  /    
43    
```



You will need to implement the following methods:

* `insert(key: number)` - Insert the key at the next position available, once placed there, check to see if it should be swapped with the parent.

* `removeMin()` - Removes the root node and swaps with the last-inserted node. If the replacement node is larger than the children, it should be swapped with the smaller child, repeat the process until no more swaps occur.


## How to test

You can test your code using `npm test`, make sure you install the appropriate dependencies for the project using `npm install`
