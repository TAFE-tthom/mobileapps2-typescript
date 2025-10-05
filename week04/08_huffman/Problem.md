
# Huffman Coding


Huffman Coding is an early method for compressing data and sequencing data based on frequency.

Your solution must implement the functions:

`type HuffmanCodingMap = { toCode: Map<string, string>, toChar: Map<string, string> }`.

* `generate(text: string): HuffmanCodingMap`, Used to generate a `toCode` and `toChar` map from the string given. Given a character in the text, you are able to translate it to its binary string representation.

* `encode(text: string, toCode: Map<string, string>)`, Uses the toCode map to generate a binary string encoding of the text given.

* `decode(bin: string, toChar: Map<string, string>)`, Given a binary string, it will use the `toChar` map to decode the binary string to its regular string interpretation.

What you may want to look up while attempting the challenge:

* Binarytree
* HashMap
* PriorityQueue
* Depth First tree traversal

Source: [Wikipedia](https://en.wikipedia.org/wiki/Huffman_coding)


## How to test

You will be able to run your solution against the test cases given using `npm run test`, make sure you install the necessary depdencies with `npm install`.
