
# ArrayPool

Javascript and Typescript are used in performance sensitive areas of the web, specifically for computer graphics. A common issue what is known as memory-sawtoothing.

## What is memory sawtoothing?

When measuring memory allocation and how much memory is in use during the execution of an application, we can observe memory usage peaking and then suddenly dropping off. This drop-off point is usually where a pause/halt in the application occurs as it is busy deallocating memory. This pattern repeats itself and can make the experience unpleasant.

## What is an array pool?

It is made up of a few different components.

* `ArrayPool`, will contain a factory method, and an array of pool entries. It will have a `constructor` and the methods `claim` and `release`.

* `ArrayPoolObject`, This is an object which is constructed and exists within the pool.

* `ArrayPoolObjectFactory`, this leverages the factory pattern, if an allocation has not been made, the factory will create a fresh object.

* `ArrayPoolEntry`, this is used to keep track and be able to occupy or mark entries within the pool as being in-use or free.

Make sure you implement the relevant methods associated with them.


## How to test

You can test your implementation with `npm run test`, make sure you install the appropriate dependencies using `npm install`.
