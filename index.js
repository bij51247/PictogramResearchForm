const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Coin = require('./models/CoinPost.js');
const Refuge = require('./models/RefugePost.js');
const Item = require('./models/ItemPost.js');

// mongoose.connect('mongodb://localhost/forms_database', {
//   useNewUrlParser: true
// })
mongoose.connect('mongodb+srv://bij70227:bij70227@cluster0.vgzrp.mongodb.net/forms_database', {
  useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
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

app.post('/post/coin', async (req, res) => {
  console.log(req.body);
  await Coin.create(req.body);
  res.redirect('/escape');
});
app.post('/post/refuge', async (req, res) => {
  console.log(req.body);
  await Refuge.create(req.body);
  res.redirect('/items');
});
app.post('/post/items', async (req, res) => {
  console.log(req.body);
  await Item.create(req.body);
  res.redirect('/last');
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
