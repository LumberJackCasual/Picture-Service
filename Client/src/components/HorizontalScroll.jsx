import React from 'react';
import { useState , useEffect } from 'react';

const HorizontalScroll = (props) => {
  // const singleItem = {
  //   product_id: props.picture.product_id,
  //   description: props.picture.description,
  //   viewOne_url: props.picture.viewOne_url,
  //   viewOneThumbnail_url: props.picture.viewOneThumbnail_url,
  // };
  const singleItem = props.pictures[0];
  const description = singleItem.description;

  return (
    <div>
      <p>{description}</p>
    </div>
  );

};

export default HorizontalScroll;
