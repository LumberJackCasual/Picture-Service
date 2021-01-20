import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import HorizontalScroll from '../Client/src/components/HorizontalScroll.jsx';

const largePics = [ "http://placeimg.com/498/498/arch?random=627", "http://placeimg.com/498/498/arch?random=378", "http://placeimg.com/498/498/arch?random=204", "http://placeimg.com/498/498/arch?random=4", "http://placeimg.com/498/498/arch?random=514", "http://placeimg.com/498/498/arch?random=892", "http://placeimg.com/498/498/arch?random=555", "http://placeimg.com/498/498/arch?random=396", "http://placeimg.com/498/498/arch?random=223" ];
const modalView = (x) => x;
const idxSync = (x) => currentIndex = x;
let currentIndex = 0;

test('horizontal scroll should render', () => {
  render(<HorizontalScroll
            largePics={largePics}
            modalView={modalView}
            idxSync={idxSync}
            currentIndex= {currentIndex}
  />)
  expect( document.getElementById("picture-module-horizontal-scroll")).toBeInTheDocument()
})

test('right click should render the next photo in the largePics array', () => {
  render(<HorizontalScroll
    largePics={largePics}
    modalView={modalView}
    idxSync={idxSync}
    currentIndex= {currentIndex}
  />)
  const element = Array.from(document.getElementsByClassName("horizontal-scroll-rightClick"));
  const rightBTN = element[0];

  fireEvent.click(rightBTN)
  expect(currentIndex).toEqual(1)

  })

  test('left click should render the next photo in the largePics array', () => {
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex= {currentIndex}
    />)
    const element = Array.from(document.getElementsByClassName("horizontal-scroll-leftClick"));
    const leftBTN = element[0];

    fireEvent.click(leftBTN)
    expect(currentIndex).toEqual(0)

    })