const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/coin', (req, res) => {
  var data = {
    title: 'コインロッカー',
  }
  res.render('coin', data);
});
app.get('/escape', (req, res) => {
  var data = {
    title: '広域避難場所',
  }
  res.render('escape', data);
});
app.get('/items', (req, res) => {
  var data = {
    title: '忘れ物取扱所',
  }
  res.render('items', data);
});
app.get('/last', (req, res) => {
  res.render('last');
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
