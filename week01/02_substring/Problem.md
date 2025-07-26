# Substring

You are tasked with writing a program that will
identify the starting location of a sub-string within
a string.

Precise, what is a substring?

A substring is string that is shorter than than the string
it is expected to be contained inside and matches the same
order within an existing string.

Example:

```
let string = "Hello World!";
let substring = "World";

// World start at index 6
```

In the above example, we can see that `World` is contained
inside the string `Hello World!`. However, we want to create
a function that can identify the location that this substring
is located within the string.

Within the example above, we can see that the substring starts
at index 6. We will need to check every character until we
reach the end of the original string as the starting point
could start at any character within it.

You will need to implement the following function:

```
function findSubString(string, subString) {
    //Your code here

}
```

The above function must return -1 if a substring cannot be found
or it will return the index (0 or greater) if the starting
index can be found within the string.

Example 1:

```

let string = "Hello World!";
let substring = "World";

let index = findSubString(string, substring); // 6
```

Example 2:

```

let string = "Morning!";
let substring = "or";

let index = findSubString(string, substring); // 1
```

Example 3:

```

let string = "Morning!";
let substring = "nothere";

let index = findSubString(string, substring); // -1
```
