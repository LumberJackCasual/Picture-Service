import React from 'react';
import PropTypes from 'prop-types';

const HorizontalScroll = ({ largePics, modalView, idxSync, currentIndex, fullScreen }) => {
  const index = currentIndex;
  const arr = largePics;
  const img = arr[index];


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
    const zoomModal = document.getElementById('zoomPic');
    zoomModal.style.display = 'block';
  }

  const mouseMoveHandler = (event) => {
    const spotlight = document.getElementById('zoomLens');
    spotlight.style.top = (event.pageY- 180) + 'px';
    spotlight.style.left = (event.pageX - 360) + 'px';
    // console.log (`Y/Top: ${event.pageY}, X/Left: ${event.pageX}`)
    const zoomPic = document.getElementById('zoomPic');
    zoomPic.style.backgroundImage = `url(${img})`;
    const cx = zoomPic.offsetWidth / spotlight.offsetWidth;
    const cy = zoomPic.offsetHeight / spotlight.offsetHeight;
    zoomPic.style.backgroundSize = `${498 * cx}px ${498 * cy}px`;

  }
 const mouseLeave = () => {
    const spotlight = document.getElementById('zoomLens');
    spotlight.style.display = 'none';
    const zoomModal = document.getElementById('zoomPic');
    zoomModal.style.display = 'none';
  }

  return (
    <div id="picture-module-horizontal-scroll" onMouseEnter={!fullScreen ?(event) => mouseEnter(event): null} onMouseMove= {!fullScreen ?mouseMoveHandler: null} onMouseLeave = {mouseLeave} >
      <div >
      <img src={img} alt="pretty stuff"  role="presentation" />
      </div>
      <div id="zoomLens" onClick={activateFullView} />
      <div id ="zoomPic" display={!fullScreen ? 'none' : 'block' }></div>
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
