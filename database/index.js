const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/understock', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const itemSchema = new mongoose.Schema({
  product_id: Number,
  viewOne_url: String,
  viewTwo_url: String,
  viewThree_url: String,
  viewFour_url: String,
  viewFive_url: String,
  viewSix_url: String,
  viewSeven_url: String,
  viewEight_url: String,
  viewNine_url: String,
});
const Item = mongoose.model('Item', itemSchema);

module.exports = { Item, db };
