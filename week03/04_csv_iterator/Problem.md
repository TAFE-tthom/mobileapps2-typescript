# CSV Iterator

Your task is to construct a CSV Iterator. Similar to the line iterator, this will involve detecting new lines as well as commas ',' that break apart the different words.

You will need to implement the following:

* `constructor(data: string)`, The constructor will accept the csv data as a large string.

* `next(): { value: string, done: boolean }`, Method will return an individual cell entry in a csv file. When there is no more data left to consume, `done` will be set to `true`.

* `finished(): boolean`, Outlines if the data that is to be read has finished or not.




## How to test

You can test your implementation with `npm run test`, make sure you have the dependencies installed before running the test cases with `npm install`.
