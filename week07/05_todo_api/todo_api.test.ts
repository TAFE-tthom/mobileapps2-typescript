


import { startServer, closeServer } from './todo_api.ts';
import { beforeAll, afterAll, test, expect } from '@jest/globals';


beforeAll(async function() {
  return startServer();
});

afterAll(async function() {
  return closeServer();
});

function apiCall({ domain, endpoint, options }) {
  return async function() {
    const fullname = `http://${domain}${endpoint}`;
    return fetch(fullname, options).then((resp) => resp.json());
  }
  
}

async function apiSingleTest({title, endpoint, options, expected}) {

  let callable = apiCall({
    domain: 'localhost:3000',
    endpoint,
    options,
  });

  test(`TodoAPI - ${title}`, async function() {
    let result = await callable();
    expect(result).toEqual(expected);
  });

}

async function apiManyTestLast({ title, endpoints, options, expected}) {

  test(`TodoAPI - ${title}`, async function() {
    let result = null;
    for(let i = 0; i < endpoints.length; i++) {
      result = await apiCall({
          domain: 'localhost:3000',
          endpoint: endpoints[i],
          options: options[i]
        })();
    };
    
    expect(result).toEqual(expected);
  });
}

async function apiManyTestMany({title, endpoints, options, expecteds }) {
  
  test(`TodoAPI - ${title}`, async function() {
    for(let i = 0; i < endpoints.length; i++) {
      const result = await apiCall({
          domain: 'localhost:3000',
          endpoint: endpoints[i],
          options: options[i]
        })();
      expect(result).toEqual(expecteds[i]);
    };
    
  });
}


apiSingleTest(
  {
    title: "get all, nothing",
    endpoint: '/todos',
    options: {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    },
    expected: []
  }
)

apiSingleTest(
  {
    title: "get 1, Does not exist",
    endpoint: '/todos/missing',
    options: {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    },
    expected: { error: true, reason: "Unable to find object associated with key" }
  }
)


apiManyTestLast(
  {
    title: 'add 1, get 1',
    endpoints: [
      '/todos',
      '/todos/first-5'
    ],
    options: [
      {
        method: "POST",
        body: JSON.stringify({
          key: 'first-5',
          title: "First Post",
          description: "This is my first todo!"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      },
    ],
    expected: {
      key: 'first-5',
      title: "First Post",
      description: "This is my first todo!"
    }
    
  }
)

apiManyTestMany(
  {
    title: 'add 2, get 2',
    endpoints: [
      '/todos',
      '/todos',
      '/todos/second',
      '/todos/third',
    ],
    options: [
      {
        method: "POST",
        body: JSON.stringify({
          key: 'second',
          title: "Second Post",
          description: "Second todo!!"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "POST",
        body: JSON.stringify({
          key: 'third',
          title: "Third Post",
          description: "This is my thid todo!"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      },
    ],
    expecteds: [
      {
        key: 'second',
        title: "Second Post",
        description: "Second todo!!"
      },
      {
        key: 'third',
        title: "Third Post",
        description: "This is my thid todo!"
      },
      {
        key: 'second',
        title: "Second Post",
        description: "Second todo!!"
      },
      {
        key: 'third',
        title: "Third Post",
        description: "This is my thid todo!"
      }
    ]
  }
)
apiManyTestMany(
  {
    title: 'add 2, update, get all',
    endpoints: [
      '/todos',
      '/todos',
      '/todos/third-3',
      '/todos/second-2',
    ],
    options: [
      {
        method: "POST",
        body: JSON.stringify({
          key: 'second-2',
          title: "Second Post",
          description: "Second todo!! of 2"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "POST",
        body: JSON.stringify({
          key: 'third-3',
          title: "Third Post",
          description: "This is my third todo!"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "PUT",
        body: JSON.stringify({
          key: 'third-3',
          description: "This is another todo!"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      },
    ],
    expecteds: [
      {
        key: 'second-2',
        title: "Second Post",
        description: "Second todo!! of 2"
      },
      {
        key: 'third-3',
        title: "Third Post",
        description: "This is my third todo!"
      },
      {
        key: 'third-3',
        title: "Third Post",
        description: "This is another todo!"
      },
      {
        key: 'second-2',
        title: "Second Post",
        description: "Second todo!! of 2"
      },
    ]
  }
)
