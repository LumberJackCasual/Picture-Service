import React from 'react';
import { useState , useEffect } from 'react';

const HorizontalScroll = (props) =>{
  const { product_id, description, viewOne_url, viewTwo_url, viewThree_url } = props.item;
  const { viewFour_url,viewFive_url, viewSix_url, viewSeven_url, viewEight_url, viewNine_url} = props.item;

  return (
    <div id="picture-module-horizontal-scroll">
      <p>{description}</p>
      <img src={viewOne_url}/>
      <button className="horizontal-scroll-rightClick">Click R</button>
      <button className="horizontal-scroll-leftClick">Click L</button>

    </div>
  );
};

export default HorizontalScroll;
