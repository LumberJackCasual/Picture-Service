const mongo = require('./index.js');

const itemsArr = [];

const arrayBuilder = () => {
  let i = 0;
  while (i < 100) {
    itemsArr.push({
      product_id: i,
      viewOne_url: 'http://placeimg.com/640/480/arch',
      viewTwo_url: 'http://placeimg.com/640/480/arch',
      viewThree_url: 'http://placeimg.com/640/480/arch',
      viewFour_url: 'http://placeimg.com/640/480/arch',
      viewFive_url: 'http://placeimg.com/640/480/arch',
      viewSix_url: 'http://placeimg.com/640/480/arch',
      viewSeven_url: 'http://placeimg.com/640/480/arch',
      viewEight_url: 'http://placeimg.com/640/480/arch',
      viewNine_url: 'http://placeimg.com/640/480/arch',

    });
    i += 1;
  }
};

arrayBuilder();

const insertItemPictures = () => {
  mongo.Item.create(itemsArr)
    .then(() => mongo.db.disconnect());
};

insertItemPictures();
