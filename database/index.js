const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/understock', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  product_id: Number,
  description: String,
  viewOne_url: String,
  viewOneThumbnail_url: String,
  viewTwo_url: String,
  viewTwoThumbnail_url: String,
  viewThree_url: String,
  viewThreeThumbnail_url: String,
  viewFour_url: String,
  viewFourThumbnail_url: String,
  viewFive_url: String,
  viewFiveThumbnail_url: String,
  viewSix_url: String,
  viewSixThumbnail_url: String,
  viewSeven_url: String,
  viewSevenThumbnail_url: String,
  viewEight_url: String,
  viewEightThumbnail_url: String,
  viewNine_url: String,
  viewNineThumbnail_url: String,
});
const Item = db.model('Item', itemSchema);

module.exports = { Item, db };
