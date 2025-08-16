
# Flattening Maps

While JSON serialisation may do this for you automatically if you have effectively encoded your data using objects, when using the `Map` type, we can run into some cases where we have to transform the data.

Let's look at some example data and how it can be re-encoded:


We'll use the following structure:

```
type HealthRecord = {
  procedures: Array<{ code: string, date: string }>
  age: number
}
```

Example: `Map<string, HealthRecord>`
```

let records = new Map();

records.set('Alice', {
  procedures: [
      {code: "visit", date: "2025-01-05 0900"},
      {code: "visit", date: "2025-01-15 0900"},
  ],
  age: 34
});
  
records.set('Jeff', {
  procedures: [
      {code: "visit", date: "2025-02-07 0900"},
      {code: "visit", date: "2025-03-10 0900"},
  ],
  age: 31
});
```

This can be transformed and flattened.

```
let flat = flatten(records);

//Below is the flattened records

[
  {
    name: 'Alice',
    age: 34,
    procedures: [
      {code: "visit", date: "2025-01-05 0900"},
      {code: "visit", date: "2025-01-15 0900"},
    ],
    
  },
  
  {
    name: 'Jeff',
    age: 31,
    procedures: [
      {code: "visit", date: "2025-02-07 0900"},
      {code: "visit", date: "2025-03-10 0900"},
    ],
    
  },
]

```
