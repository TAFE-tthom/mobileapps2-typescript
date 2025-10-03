
const TodoDatabase = require('./TodoDatabase.js');

//actionObjects are:
//
// {
//    oper: string (add, get, update, remove),
//    obj: Object that is associated with the operation
// }
//

function performOperation(oper, obj, todoDb, getCollection) {
  if(oper === 'add') {
    todoDb.addTodo(obj.key, obj.title, obj.description);
  } else if(oper === 'get') {
    
    getCollection.push(todoDb.getTodo(obj.key));
  } else if(oper === 'update') {
    
    todoDb.updateTodo(obj.key, obj.updateObj);
  } else if(oper === 'remove') {
    todoDb.removeTodo(obj.key)
  }
  
}


function procTest({
  title,
  actionObjects,
  expected
}) {

  test(`todo-database - ${title}`, function() {
    let todoDB = new TodoDatabase();
    let elements = [];
    for(let ao of actionObjects) {
      let oper = ao.oper;
      let obj = ao.obj;
      performOperation(oper, obj, todoDB, elements);
    }

    expect(elements.length).toEqual(expected.length);

    for(let i = 0; i < elements.length; i++) {
      const ao = elements[i];
      expect(ao).toEqual(expected[i]);
    }    
    
  }); 
}


procTest({
  title: 'add-get 1',
  actionObjects: [
    { oper: 'add',
      obj: {
        key: 'first',
        title: 'Homework 1',
        descrption: 'Some homework'
      }
    },
    {
      oper: 'get',
      obj: {
        key: 'first'
      }
    },
  ],
  expected: [ 
    {
      key: 'first',
      title: 'Homework 1',
      descrption: 'Some homework'
    },
  ]
  
})

procTest({
  title: 'add-update-get 2',
  actionObjects: [
    { oper: 'add',
      obj: {
        key: 'first',
        title: 'Homework 1',
        descrption: 'Some homework'
      }
    },
    { oper: 'add',
      obj: {
        key: 'second',
        title: 'Homework 2',
        descrption: 'Some homework for homework'
      }
    },
    { oper: 'update',
      obj: {
        key: 'second',
        descrption: 'More homework'
      }
    },
    {
      oper: 'get',
      obj: {
        key: 'second'
      }
    },
  ],
  expected: [ 
    {
      key: 'second',
      title: 'Homework 2',
      descrption: 'More homework'
    },
  ]
  
})


procTest({
  title: 'add-remove-get 2',
  actionObjects: [
    { oper: 'add',
      obj: {
        key: 'first',
        title: 'Homework 1',
        descrption: 'Some homework'
      }
    },
    { oper: 'add',
      obj: {
        key: 'second',
        title: 'Homework 2',
        descrption: 'Some homework for homework'
      }
    },
    { oper: 'remove',
      obj: {
        key: 'first',      }
    },
    {
      oper: 'get',
      obj: {
        key: 'first'
      }
    },
    {
      oper: 'get',
      obj: {
        key: 'second'
      }
    },
  ],
  expected: [ 
    {
      key: 'second',
      title: 'Homework 2',
      descrption: 'More homework'
    },
  ]
  
})


procTest({
  title: 'add-get 5',
  actionObjects: [
    { oper: 'add',
      obj: {
        key: 'first',
        title: 'Homework 1',
        descrption: 'Some homework for Java'
      }
    },
    { oper: 'add',
      obj: {
        key: 'second',
        title: 'Homework 2',
        descrption: 'Some homework for homework'
      }
    },
    { oper: 'add',
      obj: {
        key: 'third',
        title: 'Homework 3',
        descrption: 'Some homework...'
      }
    },
    { oper: 'add',
      obj: {
        key: 'fourth',
        title: 'Homework 4',
        descrption: 'Some homework for DB'
      }
    },
    { oper: 'add',
      obj: {
        key: 'fifth',
        title: 'Homework 5',
        descrption: 'Some homework for javascript'
      }
    },
    {
      oper: 'get',
      obj: {
        key: 'first'
      }
    },
    {
      oper: 'get',
      obj: {
        key: 'third'
      }
    },
    {
      oper: 'get',
      obj: {
        key: 'fifth'
      }
    },
  ],
  expected: [
    {
      key: 'first',
      title: 'Homework 1',
      descrption: 'Some homework'
    },
    {
      key: 'third',
      title: 'Homework 3',
      descrption: 'Some homework...'
    },
    {
      key: 'fifth',
      title: 'Homework 5',
      descrption: 'Some homework for javascript'
    },
  ]
  
})
