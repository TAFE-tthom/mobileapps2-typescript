
import express from 'express';

const app = express();

app.use(express.json())

let _server: any = null;

// Do not touch code above


app.get("/todos", function(req, res) {
  const entries = [];
  
  res.send(entries);
})

app.get("/todos/:key", function(req, res) {

  res.send({})
})

app.post("/todos", function(req, res) {
  
  res.send({});
})

app.put("/todos/:key", function(req, res) {
  res.send({})
})

app.delete("/todos/:key", function(req, res) {
  res.send({})
})

// Do not touch code below

export async function startServer() {
  _server = app.listen(3000, function() {});
  return _server;
}

export async function closeServer() {
  if(_server != null) {
    return _server.close();
  }
  return true;
}

