
# HashMap

You are to create a separate chaining-list for your individual nodes within your hashmap. This is because each `node`/bucket within the hashmap 

You will need to use an additional data structure within your hashmap to facilitate the chain and handle collisions.

You will need to ensure that your hashmap can resize and minimises collisions.

* `constructor(initial: number = 4)`, Initialises the hashmap, specifies the default number of buckets that the hashmap starts with but can be overridden.

* `resize()`, Resizes the number of buckets within the hashmap, this is where the number of items inserted into the hashmap is equal to or greater than capacity. The hashmap will need to resize by 2x minimum and reinsert the existing set of items into a new set.


* `insertItem(key: K, value: V)`, Inserts a new entry within the hashmap, if the key exists, it replaces the existing value with the new one.

* `getItem(key: K)`, Retrieves an object using the key given, if the object does not exist or key does not match anything, null is returned (unless it is infact assigned to null).

* `removeItem(key: K)`, Removes an item from the hashmap, if the item exists, it returns it as well, if not, no item was removed.


## How to test

You can test your implementation using `npm run test`, make sure you have installed the required dependencies with `npm install`.
