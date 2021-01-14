const mongo = require('./index.js');

//http://placeimg.com/640/480/arch   this will give me a random image from placeIMG

const insertItemPictures = () => {
  mongo.Item.create(samplePosts)
    .then(() => mongo.db.disconnect());
};

insertItemPictures();
