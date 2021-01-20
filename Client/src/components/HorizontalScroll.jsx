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
  const mouseEnter = () => {
    const spotlight = document.getElementById('zoomLens');
    spotlight.style.display = 'block';
  }

  const mouseMoveHandler = (event) => {
    //console.dir(event.target);
    //console.log(`${event.pageX} and ${event.pageY}`);
    const spotlight = document.getElementById('zoomLens');
    const mouseY = event.pageY;
    const mouseX = event.pageX;
    spotlight.style.top = mouseY - 190 + 'px';
    spotlight.style.left = mouseX - 340 + 'px';

  }
 const mouseLeave = () => {
    const spotlight = document.getElementById('zoomLens');
    spotlight.style.display = 'none';
  }

  return (
    <div id="picture-module-horizontal-scroll">
      <img src={arr[index]} alt="pretty stuff" onClick={activateFullView} role="presentation" onMouseEnter={mouseEnter} onMouseMove={mouseMoveHandler} onMouseLeave = {mouseLeave} />
      <div id="zoomLens" />
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
