## Your todo-api

You are to implement a Key-Value store database for a todolist and integrate it as part of an `expressjs` application. The goal with this is that you are to create a simple `CRUD` application.

This isn't a generic key-value store but one where a key is a string and the values relate to a basic description for a todo-task. `title` and `description`.

### Endpoints to implement

You will need to implement the following endpoints:

* `GET /todos` - This will return an array of objects, where each object is a todo-object. The endpoint always returns a success status of `200` unless something fundamentally has gone wrong.

Example data of that the endpoint should return:
```js
[
  {
    key: 'study-db',
    title: 'Studying Databases',
    description: 'Studying databases for week 7'
  },
  {
    key: 'study-js',
    title: 'Studying javascript',
    description: 'Working on expressjs and callbacks'
  }
]
```


* `GET /todos/:key` - This will return an object in the format:

```js
{
  key: '<key associated>',
  title: '<title>',
  description: '<description>'
}
```

Upon a successful retrieval, the endpoint must return a status of `200` along with the object above. If the key does not exist, a status of `404` should be returned and the following object.

```js
{
  error: true,
  reason: 'Unable to find object associated with key'
}
```

\newpage

* `POST /todos` - This endpoint will accept a JSON object via the `body`, This will require the following object:

```js
{
  key: '<key associated>',
  title: '<title>',
  description: '<description>'
}
```

All fields must be present and the endpoint must return status `200` to outline a success. If the object is missing any of the fields associated, then the endpoint should return and a status of `404`:

```js
{
  error: true,
  reason: 'Unable to add new object to todo list'
}
```


* `PUT /todos/:key` - This endpoint will accept JSON object that will contain:

```js
{
  title?: '<title changes>',
  description?: '<description changes>'
}
```

Upon success, this update the relevant fields of the object. If it is successful, the endpoint should send back the updated object with status `200`.

If the key does not exist, the endpoint should return and a status of `404`:

```js
{
  error: true,
  reason: 'Unable to find object associated with key'
}
```


* `DELETE /todos/:key` - This endpoint will be responsible for deleting an object associated with a `key`. If the object is to be delete, the endpoint should return the object along with status `200`, however if the key does not exist, the endpoint should return an error object along with status `404`.

Example of error object:

```js
{
  error: true,
  reason: 'Unable to find object associated with key'
}
```
