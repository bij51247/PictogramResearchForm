const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

const ItemSchema = new Schemea({
  obj_fun: Number,
  obj_situ_fun: Number,
  obj_situ_mov: Number,
  obj: Number,
  obj_situ_mov_fun: Number,
});

const Item = mongoose.model('ItemPosts', ItemSchema);

module.exports = Item;