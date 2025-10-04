
# CircularBuffer

A circular buffer is a kind of a queue but uses an array instead of some of the linked-list varieties. The advantage of a circular buffer is that it can be similar to an arraylist, where the contents are able to be resized.

There is a gaurantee that the enqueue is O(1) and dequeue is O(1). It is  a matter of changing the current head via incrementing/cycling indexes.

## How to test

You can test your implementation by using `npm run test`, make sure you install the necessary dependencies using `npm install`.
