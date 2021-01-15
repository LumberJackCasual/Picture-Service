const faker = require('faker');
const mongo = require('./index.js');

const itemsArr = [];

const arrayBuilder = () => {
  let i = 0;
  while (i < 100) {
    itemsArr.push({
      product_id: i,
      description: faker.commerce.productName(),
      viewOne_url: 'http://placeimg.com/498/498/arch',
      viewOneThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewTwo_url: 'http://placeimg.com/498/498/arch',
      viewTwoThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewThree_url: 'http://placeimg.com/498/489/arch',
      viewThreeThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewFour_url: 'http://placeimg.com/498/498/arch',
      viewFourThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewFive_url: 'http://placeimg.com/498/498/arch',
      viewFiveThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewSix_url: 'http://placeimg.com/498/498/arch',
      viewSixThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewSeven_url: 'http://placeimg.com/498/498/arch',
      viewSevenThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewEight_url: 'http://placeimg.com/498/498/arch',
      viewEightThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewNine_url: 'http://placeimg.com/498/498/arch',
      viewNineThumbnail_url: 'http://placeimg.com/70/70/arch',

    });
    i += 1;
  }
};

arrayBuilder();

const insertItemPictures = () => {
  mongo.Item.create(itemsArr)
    .then(() => mongo.db.close());
};

insertItemPictures();
