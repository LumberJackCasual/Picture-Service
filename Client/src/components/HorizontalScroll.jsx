import React from 'react';
import PropTypes from 'prop-types';

const HorizontalScroll = ({ largePics, modalView, idxSync, currentIndex }) => {
  const index = currentIndex;
  const arr = largePics;

  const onClickRightHandler = () => {
    if (index >= arr.length - 1) {
      idxSync(0);
    } else {
      idxSync(index + 1);
    }
  };
  const onClickLeftHandler = () => {
    if (index === 0) {
      idxSync(arr.length - 1);
    } else {
      idxSync(index - 1);
    }
  };
  const activateFullView = () => {
    modalView();
  };

  return (
    <div id="picture-module-horizontal-scroll">
      <img src={arr[index]} alt="pretty stuff" onClick={activateFullView} role="presentation" />
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
HorizontalScroll.propTypes = {
  largePics: PropTypes.arrayOf(PropTypes.string).isRequired,
  idxSync: PropTypes.func.isRequired,
  modalView: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired
};

export default HorizontalScroll;
