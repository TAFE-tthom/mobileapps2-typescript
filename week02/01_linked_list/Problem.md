# Linked List

Welcome to building your first data-structure! This isn't going to be an easy task but will be a rewarding one, nonetheless.

If you inspect `LinkedList.ts`, you will notice that there are two classes within this file.

* `LinkedList`

    A linkedlist is a container class, it will hold onto
    the first node in the list when initialised.

    The list will first node (Root) will be set to null
    as it will not contain any items until Append is called.



* `Node` - This stores the data and the link to the next node.


## What is a linked list?

A linked list is a linked data structure. The typical structure
requires the container type to hold onto the first node
that will then hold onto the next and so on.

Let's diagram this.

```

1. Initialised Linked List, no data


LL.Root is null

Null (no elements)




2. We append the number 10


10 -> Null

One element has been added, Root is currently set to contain:
    * the number 10
    * a reference to the next link but is Null.

3. We append the number 20

10 -> 20 -> Null

Two elements are contained within the linked list
    * When appending, we started by checking to see if Root
        was Null, since it wasn't we proceeded to do:
    * Check the Next field of Root and see if it was Null
        It was, so we updated Root.Next to contain:
        * the number 20
        * a reference to the next link but is Null

    Note: Ideally, we wouldn't set Root.Next directly
        but use a variable called `cursor`

4. We append the number 30

10 -> 20 -> 30 -> Null

Two elements are contained within the linked list
    * When appending, we started by checking to see if Root
        was Null, since it wasn't we proceeded to do:
    * Check the Next field of Root and see if it was Null,
        since it wasn't we proceeded to do:
    * Check the Next field of Root.Next and see if it was Null
        It was, so we updated cursor.Next to contain:
        * the number 30
        * a reference to the next link but is Null

    Hopefully at this point, it is clear we need to use a
    loop and


```

A Linked List is a linked data structure that leverages
the idea of references and indirection within software.

Whenever you create an object of a class or an array, the
variables that are assigned to these types don't directly
hold the data that they are assigned to.

They are assigned to a memory address, with this memory address
we are able to visit the location where the fields or elements
are located.

With a linked data structure, we are leveraging this idea
of indirection to chain objects together.

## References!

Okay! We need to have a quick little example on reference types
and how they work.

Lets use a `Node` as an example, we have two properties:

* value - A number stored in a node
* next - Link to the next node

Lets go through the code below.

```

let a = new Node(10);
let b = new Node(20);
let c = new Node(30);
let d = new Node(40);
let e = new Node(50);

// At this point, we have created the nodes but they are
// not linked

a.next = b;

//We have linked our first two, we are going to use 'a' as
// the start of our linked list.

/*

It will look like this:

(10) -> (20) -> null


Each '->' is an arrow that points to another node, it is the
.Next properties.


*/

//Alright, lets now hook c to b

b.next = c;

/*

Now we start talking and seeing something new here, as
we have more in a chain but it may not be clear.

It will look like this:

 a       b       c

(10) -> (20) -> (30) -> null


a.next refers to b
b.next refers to c
null
If they are linked, how can we get c from a?

Well, if a, b and c are all the same type?
and .next is also the same type as well, could we do the following?


let v = a.next.next;

Yes! We can actually access c by just using the properties
    on a, and this is because a.Next is b and calling .next
    on b just gives us c

*/


//Lets test something now

a.next.next.next = d;

/*

We now have

 a       b       c       d

(10) -> (20) -> (30) -> (40) -> null

*/

//Now, using b, add e to the end of the linked list.


```


## What do you need to implement?

You will need to implement the following methods:

* `add(int item)` - Adds to the end of the LinkedList

* `prepend(int item)` - Adds to the front of the LinkedList, replaces the value at Root

* `get(index)` - Checks to see if the index is within bounds, if it is, searches for the element in the list that matches its
logical index.

If index is < 0 or >= Size, the method should return null.

* `remove(int index)` - Checks to see if the index is within bounds, if it is, searches for the element in the list that matches its logical index. If it does, it will remove the node from the list and stitch the previous node to the one after.

Method should return the value held by the node that was removed.

If index is < 0 or >= Size, the method should return null.

## How to test?

Once you have implemented your solution, you are able to run `npm test` that will run against your implementation against the given test cases.


