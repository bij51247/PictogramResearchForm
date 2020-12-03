const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
const { renameSync } = require('fs');
app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index');
});

app.listen(8080,()=>{
  console.log('running');
});
