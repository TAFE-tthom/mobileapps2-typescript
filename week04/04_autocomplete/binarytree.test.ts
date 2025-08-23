import {expect, test} from '@jest/globals';

import { AutoCompleteTree } from './Autocomplete.ts';


test("autocomplete tree, insert suggest 1", function() {

  const tree = new AutoCompleteTree();

  const inputted = [
    'jeff'
  ];
  
  const suggest = 'j';
  const expected = [
    'jeff'
  ];

  inputted.forEach((e) => {
    tree.insert(e);
  });

  const result = tree.suggest(suggest);

  expect(result).toEqual(expected);
  
});


test("autocomplete tree, insert suggest 2", function() {

  const tree = new AutoCompleteTree();

  const inputted = [
    'Cat',
    'Category',
    'Cafe',
    "Can't",
    'Apple',
    'Ape',
    'Serene'
  ];
  
  const suggest = 'Ca';
  const expected = [
    'Cat',
    'Category',
    "Can't",
    'Cafe'
  ];

  inputted.forEach((e) => {
    tree.insert(e);
  });

  const result = tree.suggest(suggest);

  expect(result).toEqual(expected);
  
});


test("autocomplete tree, insert suggest 3", function() {

  const tree = new AutoCompleteTree();

  const inputted = [
    'Cat',
    'Category',
    'Cafe',
    "Can't",
    'Apple',
    'Ape',
    'Serene'
  ];
  
  const suggest = 'Cat';
  const expected = [
    'Cat',
    'Category',
  ];

  inputted.forEach((e) => {
    tree.insert(e);
  });

  const result = tree.suggest(suggest);

  expect(result).toEqual(expected);
  
});


test("autocomplete tree, insert suggest 4", function() {

  const tree = new AutoCompleteTree();

  const inputted = [
    'Cat',
    'Category',
    'Cafe',
    "Can't",
    'Apple',
    'Ape',
    'Serene'
  ];
  
  const suggest = 'Ap';
  const expected = [
    'Apple',
    'Ape'
  ];

  inputted.forEach((e) => {
    tree.insert(e);
  });

  const result = tree.suggest(suggest);

  expect(result).toEqual(expected);
  
});


