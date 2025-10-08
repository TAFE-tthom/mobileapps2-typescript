# Typescript, Interfaces, Generics and Revision

Starting your typescript journey with some revision exercises as well as some new topics and exercises in which to apply your skills.

## Focus

The focus of this is on all the exercises to ensure you get familiar with a lot of existing JS knowledge and constructs but now in a typescript context.

## Interfaces

Introducing a new keyword implements.

Interfaces classically declare methods that a class must implement and they cannot be instantiated.

Within typescript however, it is possible to outline properties and fields within an interface. Interfaces aren't restricted to only being used once unlike class inheritance. Classes can inherit from as many interfaces as they want.

```ts
interface ConvertToCSV {

  toCSVString(): string
}
```

When a class inherits from the above, it will need to ensure that the method `toCSVString` is implemented.


```ts
class Spreadsheet implements ConvertToCSV {

  data: Array<Array<string>>; //assigned in constructor

  // rest of the fields and methods

  toCSVString() {

    const toProcess = this.data;

    let output = '';
    
    for(let i = 0; i < toProcess.length; i++) {
      const row = toProcess[i];
      let line = '';
      
      for(let j = 0; j < row.length; j++) {
        line += row[j];
        
      }

      line += '\n';

      output += line;
    }

    return output;
  }
}
  
```

The `Spreadsheet` class implements the `ConvertToCSV` interface, this means we can utilise the this method if we treat an object such as `Spreadsheet` or any other as a `ConvertToCSV` type.

```ts
// above snipped
const converter: ConvertToCSV = new Spreadsheet(data);

const csvString = converter.toCSVString();
```


The `converter` variable can be assigned to any type that implements `ConvertToCSV`.


## Generics

Generics with typescript are also similar to Java and C# generics, where we want to parameterise the handling of types and even enforce some rules around them.

You have probably seen them used already with arrays in Typescript where you have had to specify the type that is contained within the array (example: `Array<string>`). The `string` part is a *type argument*, this is where the programmer supplies the type information.

If we were to provide a brief segment of the Array class, where the type argument is represents is:

```ts
class Array<T>
```

The outline of `<T>` has specified the type paramter, the argument is represented through this parameter.

When used with methods, (lets assume `getItem and setItem` with `Array`), we can observe how the paramter is passed through out the definition.

```ts

class Array<T> {

  // rest snipped

  getItem(): T {
    ...
  }

  setItem(item: T) {
    ...
  }
  
}
  
```

We can use `T` as part of the type for a parameter of a method or function and as a return type.

This is useful when we want to generalise algorithms, say like a sorting algorithm where the concrete information that needs to be known is the type itself or how to compare the type. 
