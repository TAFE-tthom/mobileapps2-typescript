
# Autocomplete
 
You have been tasked with constructing a class that will used for building an autocomplete tree. This tree is a form of a prefix/Trie. The focus of your autocomplete Trie is to be able to add words to the tree and also provide a list of suggestions.

The method below do the following:

* `suggest(prefix: string)` - This method will use the first starting parts of a word and find all words that start with it. These words should below to a subtree.

* `insert(newWord: string)` - This method accepts a string and will break it up into each character and insert the characters into the tree, Each character of a word given will use the previous character (except for the starting character) as its parent.

Example:

```
"Hello"

H has no parent
e has H as a parent
l has e as a parent
l has l as a parent
o has l as a parent  
```
 
You have been given the following class to implement.


```ts
class AutoCompleteTree {

  // TODO: Specify your own fields and properties

  constructor() {
    //Anything you need initialised here
  }
  
  /**
   * Returns a list of strings which that prefix the `prefix` string
   */
  suggest(prefix: string): Array<string> {
    //TODO: Implement your suggestion solutions
    
    return [];
  }


  /*
   * Inserts a new string that can be found with `suggest`
   */
  insert(newWord: string) {
  
    //TODO: Implement your insert solution
  }
  
} 
```

Below is an example of the usage:

```ts

const tree = new AutoCompleteTree();

tree.insert("Cat");
tree.insert("Category");
tree.insert("Can't");
tree.insert("Cafe");
tree.insert("Apple");
tree.insert("Ape");
tree.insert("Serene");

let s1 = tree.suggest("Ca");
  // [ "Cat", "Category", "Can't", "Cafe" ]
let s2 = tree.suggest("Cat");
  // [ "Cat", "Category", "Can't" ]

let s3 = tree.suggest("Ap");
  // [ "Apple", "Ape" ]
let s4 = tree.suggest("App");
  // [ "Apple" ]
   
```


## How to test

You can test your solution by running `npm test`, if you encounter an error, please make sure you have installed the dependencies first using `npm install`.

