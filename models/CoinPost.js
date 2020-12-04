const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

const CoinPostSchema = new Schemea({
  obj: Number,
  obj_fun: Number,
  obj_situ_mov: Number,
  obj_situ: Number,
  situ: Number
});

const CoinPost = mongoose.model('CoinPosts', CoinPostSchema);

module.exports = CoinPost;