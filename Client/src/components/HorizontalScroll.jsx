import React, { useState } from 'react';

const HorizontalScroll = (props) => {
  const [img, setImg] = useState(0);
  const arr = props.largePics;

  const onClickRightHandler = () => {
    if (img >= arr.length-1) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  };
  const onClickLeftHandler = () => {
    if (img === 0) {
      setImg(arr.length-1);
    } else {
      setImg(img - 1);
    }
  };

  return (
    <div className="picture-module-horizontal-scroll">
      <img src={arr[img]} alt="pretty stuff" />
      <button className="horizontal-scroll-rightClick" onClick={onClickRightHandler} type="button">
        <svg color="#2F3337" width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
          <title>Chevron Right</title>
          <path d="M7 2l10 10L7 22" stroke="inherit" fill="none" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="horizontal-scroll-leftClick" onClick={onClickLeftHandler} type="button">
        <svg color="#2F3337" width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
          <title>Chevron Left</title>
          <path d="M17 2L7 12l10 10" stroke="inherit" fill="none" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default HorizontalScroll;
