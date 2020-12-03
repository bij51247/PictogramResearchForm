const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/test', (req, res) => {
  res.render('test');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
} 1
app.listen(port, () => {
  console.log('running');
});
// app.listen(8080,()=>{
//   console.log('running');
// });
