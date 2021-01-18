import React from 'react';
import PropTypes from 'prop-types';

const VerticalScroll = ({ thumbnails, focus }) => {
  const picArr = thumbnails;
  const currentFocus = focus;

  const listItems = picArr.map((thumbnail, idx) => (
    <button type="button" data-value={idx} key={Math.round(Math.random() * 1000)} style={currentFocus === idx ? { border: '1px solid blue' } : null}>
      <img src={thumbnail} key={thumbnail} alt="tiny" />
    </button>
  ));
  return (
    <div className="picture-module-vertical-scroll">
      <button className="vertical-scroll-topClick" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
          <title>Chevron Up</title>
          <path d="M22 17L12 7 2 17" stroke="inherit" fill="none" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="picture-module-vertical-scroll-img">
        {listItems}
      </div>
      <button className="vertical-scroll-bottomClick" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
          <title>Chevron Down</title>
          <path d="M2 7l10 10L22 7" stroke="inherit" fill="none" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

VerticalScroll.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
  focus: PropTypes.number.isRequired,
};

export default VerticalScroll;