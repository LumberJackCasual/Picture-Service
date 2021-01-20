import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import VerticalScroll from '../Client/src/components/VerticalScroll.jsx';

const thumbnails = [ "http://placeimg.com/70/70/arch?random=568", "http://placeimg.com/70/70/arch?random=250", "http://placeimg.com/70/70/arch?random=918", "http://placeimg.com/70/70/arch?random=775", "http://placeimg.com/70/70/arch?random=303", "http://placeimg.com/70/70/arch?random=434", "http://placeimg.com/70/70/arch?random=826", "http://placeimg.com/70/70/arch?random=876", "http://placeimg.com/70/70/arch?random=789" ];
const focus = 0;
const idxSync = (x) => x;
const currentIndex = 0;

test('vertical scroll should render', () => {
  render(<VerticalScroll
    thumbnails={thumbnails}
    focus={focus}
    idxSync={idxSync}
  />)
  expect( document.getElementById("picture-module-vertical-scroll")).toBeInTheDocument()
})

test('clicking an image should change focus to that picture\'s index', () => {
  render(<VerticalScroll
    thumbnails={thumbnails}
    focus={focus}
    idxSync={idxSync}
  />)
  const scrollDiv = Array.from(document.getElementsByClassName("picture-module-vertical-scroll-img"));
  const imgBTN = scrollDiv[0].children[0];

  fireEvent.click(imgBTN)
  expect(focus).toEqual(0)
})