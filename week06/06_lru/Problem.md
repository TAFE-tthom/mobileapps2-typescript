

# Least-Recently Used Cache

You are to implement a cache-strategy that will keep track of the active and inactive elements within its list.

* Active List, an active list is where the data is alreadyy loaded, this data can be something that was freshly `add`ed with `add` or `use`ed with `use` methods.

* Inactive List, an inactive list is where the data is stubbed, the key is still known and the metadata is held but the actual data is not loaded, it should be dumped when it is moved into the inactive list.


Entries are observable with `status(key: number)`, where it will return object of the data type `LRUEntryStatus`.

## How does an LRU Cache strategy work?

1. When the cache is empty, any newly added data will take a spot available in the active list immediately. The active list and inactive list have a specific capacity, but default they are set to 4 and for the sake of the test cases.

Lets assume 4 places in the active list are taken by newly added data, what you will observe is that the mostly recently added data will be the last to be evicted. If new data is added, the element in the oldest slot will be evicted and moved to the inactive list.

2. When an entry is used in the active list, this entry will be promoted to the most-recently used entry slot. Since it is just using an entry already in the active list, no entries are evicted.


3. If an entry is used and it belongs to the inactive list, we have to shake things up, the entry in the inactive list is removed from the inactive list and promoted to the active list, this means the data is also accessed and retrievable. The least recently used data in the active list is demoted and the data associated is dropped.


4. If the inactive list is full and newly added entry is given to the activelist, the least recently used entry in the inactive list is removed completely (no metadata at all.)


## How to test

You can test your implementation using `npm run test`, make sure you have installed the dependencies required for running the test cases using `npm install`.
