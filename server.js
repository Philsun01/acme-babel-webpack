const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res, next)=>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.get('/api/places', (req, res, next)=> {
  res.send([
    { id: 1, name: 'New York'},
    { id: 2, name: 'California'}
  ])
});

app.get('/api/people', (req, res, next)=> {
  res.send([
    {}
  ])
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
