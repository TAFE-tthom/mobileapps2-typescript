
# Sequence

You are tasked with writing a sequence generator object.
This class will require the use of constructor overloading, as it will
support 3 different constructors. Along with 3 methods associated.

* `constructor(start: number, step: number=1, end: number | null=null)` - Creates a SequenceGen object with a starting integer, the step will be set to 1 unless specified and end, when set to null will imply that it never ends, otherwise if end > start, it will be used to generate a sequence between start and end by step. 

* `current(): number` - Returns the integer that the generator is at.

* `finished(): boolean` - Outlines if the generator is finished, if
    an end was not specified, the method will return false, otherwise
    if the current number exceeds the `end` value.

* `next(): { value: number, done: boolean }` - Returns the current integer and moves to the next integer based on `step`. 

You may assume that the sequence only handles positive integers and that
the step integer is greater than 0 and end is greater than start.

You will need to also ensure that the generator implements the iterator protocol for javascript so it can be used in a for-of loop.

## How to test

You can test your solution against your implemented class by calling
`npm test`.
