const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

const RefugePostSchema = new Schemea({
  obj_situ: Number,
  situ_mov_fun: Number,
  obj: Number,
  obj_fun: Number,
  situ_mov: Number,
});

const RefugePost = mongoose.model('RefugePosts', RefugePostSchema);

module.exports = RefugePost;