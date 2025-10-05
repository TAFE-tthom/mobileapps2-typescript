
import { expect, test } from 'vitest';
import { HuffmanCoding } from './huffman';


test('HuffmanCoding 1 - Test', function() {

  const stringToEncode = 'aaaabbbcd';
  const codes = HuffmanCoding.generate(stringToEncode);
  const encoded = HuffmanCoding.encode(stringToEncode, codes.toCode);
  const decoded = HuffmanCoding.decode(encoded, codes.toChar);

  const charKeys = new Array(codes.toCode.keys());

  expect(charKeys).toEqual(['a', 'b', 'c', 'd']);

  expect(encoded).toEqual('0000111111100101');
  
  expect(decoded).toEqual(stringToEncode);
  
});


test('HuffmanCoding 2 - Test', function() {

  const stringToEncode = 'aaaabbbbc';
  const codes = HuffmanCoding.generate(stringToEncode);

  const encoded = HuffmanCoding.encode(stringToEncode, codes.toCode);
  const decoded = HuffmanCoding.decode(encoded, codes.toChar);
  const charKeys = new Array(codes.toCode.keys());

  expect(charKeys).toEqual(['a', 'b', 'c']);

  expect(encoded).toEqual('111111000010')

  
  expect(decoded).toEqual(stringToEncode);
  
});
