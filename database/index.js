const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://172.17.0.2:27017/understock', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  product_id: Number,
  description: String,
  largePics: Array,
  thumbnails: Array,
});
const Item = db.model('Item', itemSchema);

module.exports = { Item, db };
