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
      viewTwo_url: 'http://placeimg.com/640/480/arch',
      viewTwoThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewThree_url: 'http://placeimg.com/640/480/arch',
      viewThreeThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewFour_url: 'http://placeimg.com/640/480/arch',
      viewFourThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewFive_url: 'http://placeimg.com/640/480/arch',
      viewFiveThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewSix_url: 'http://placeimg.com/640/480/arch',
      viewSixThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewSeven_url: 'http://placeimg.com/640/480/arch',
      viewSevenThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewEight_url: 'http://placeimg.com/640/480/arch',
      viewEightThumbnail_url: 'http://placeimg.com/70/70/arch',
      viewNine_url: 'http://placeimg.com/640/480/arch',
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
