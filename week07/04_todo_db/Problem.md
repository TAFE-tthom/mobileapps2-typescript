
## TODO-Database

You have been tasked with writing a todo-list database. The focus of this task is to create a `class` called `TodoDatabase` which will have the following:

* `constructor()` - No parameters, it simply initialises the object.

* `addTodo(key, title, description)` - Three parameters, `key` is a unique identifier for the todo-object, it is used to ,  `title` outlines the heading that it would be under and the `description` are the details associated with the object.

* `getTodo(key)` - One parameter, `key` as with `addTodo`, `getTodo` is used to retrieve a `todo-object`. The object will be in the form:

```js
{
  key: 'unique_value',
  title: 'Cleaning up garage',
  description: 'Make sure we have necessary cleaning materials'
}  
```

* `removeTodo(key)` - One parameter, `key` which is associated with the `todo-object`, will be removed and returned by the method. If the object does not exist, it is to return `null`.

* `updateTodo(key, { title?, description? })` - Two parameters, `key` which is associated with the `todo-object`. The other parameter is an object in which the fields `title` and `description` are considered `optional`, so you will need to check which field exist and if one or both exist, take the changes from them and update the `todo-object` with it.

Example:
```js
let todoDB = new TodoDatabase();

todoDB.add('first-entry', 'Working on javascript',
  'Finishing these exericses'); //Will be added to the database

todoDB.update('first-entry', { title: 'Learning javascript' });
// Previously { key: 'first-entry', title: 'Working on javascript', ... }
// Now { key: 'first-entry', title: 'Learning javascript', ... }

```

