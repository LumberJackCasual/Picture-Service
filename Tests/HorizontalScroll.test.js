/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import HorizontalScroll from '../Client/src/components/HorizontalScroll';

describe('Horizontal Scroll Component', () => {
  const largePics = ['http://placeimg.com/498/498/arch?random=627', 'http://placeimg.com/498/498/arch?random=378', 'http://placeimg.com/498/498/arch?random=204', 'http://placeimg.com/498/498/arch?random=4', 'http://placeimg.com/498/498/arch?random=514', 'http://placeimg.com/498/498/arch?random=892', 'http://placeimg.com/498/498/arch?random=555', 'http://placeimg.com/498/498/arch?random=396', 'http://placeimg.com/498/498/arch?random=223'];

  test('horizontal scroll should render', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={0}
      fullScreen={false}
    />);
    expect(document.getElementById('picture-module-horizontal-scroll')).toBeInTheDocument();
  });

  test('right click should render the next photo in the largePics array if current index is less than array length', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={3}
      fullScreen={false}
    />);
    const element = Array.from(document.getElementsByClassName('horizontal-scroll-rightClick'));
    const rightBTN = element[0];

    fireEvent.click(rightBTN);
    expect(idxSync.mock.calls[0][0]).toBe(4);
  });

  test('right click should render the first photo in the largePics array if current index is greater than array length', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={8}
      fullScreen={false}
    />);
    const element = Array.from(document.getElementsByClassName('horizontal-scroll-rightClick'));
    const rightBTN = element[0];

    fireEvent.click(rightBTN);
    expect(idxSync.mock.calls[0][0]).toBe(0);
  });

  test('left click should render the next photo in the largePics array if index is greater than zero', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={6}
      fullScreen={false}
    />);
    const element = Array.from(document.getElementsByClassName('horizontal-scroll-leftClick'));
    const leftBTN = element[0];

    fireEvent.click(leftBTN);
    expect(idxSync.mock.calls[0][0]).toBe(5);
  });

  test('left click should render the last photo in the largePics array if index is equals zero', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={0}
      fullScreen={false}
    />);
    const element = Array.from(document.getElementsByClassName('horizontal-scroll-leftClick'));
    const leftBTN = element[0];

    fireEvent.click(leftBTN);
    expect(idxSync.mock.calls[0][0]).toBe(8);
  });

  test('mouse entering into the image container should render the zoomLens', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={0}
      fullScreen={false}
    />);
    const container = document.getElementById('picture-module-horizontal-scroll');
    const lens = document.getElementById('zoomLens');
    fireEvent.mouseEnter(container);

    expect(lens).toHaveStyle('display: block');
  });

  test('zoom modal should disappear when mouse leaves the image container', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={0}
      fullScreen={false}
    />);
    const container = document.getElementById('picture-module-horizontal-scroll');
    const modal = document.getElementById('zoomPic');
    fireEvent.mouseLeave(container);

    expect(modal).toHaveStyle('display: none');
  });

  test('clicking on the lens should activate the full screen modal', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={0}
      fullScreen={false}
    />);
    const container = document.getElementById('picture-module-horizontal-scroll');
    const lens = document.getElementById('zoomLens');
    fireEvent.mouseEnter(container);
    fireEvent.click(lens);

    expect(modalView.mock.calls.length).toBe(1);
  });

  test('mouseMove handler should set background image of the zoom modal to current image', () => {
    const modalView = jest.fn();
    const idxSync = jest.fn((arg) => arg);
    render(<HorizontalScroll
      largePics={largePics}
      modalView={modalView}
      idxSync={idxSync}
      currentIndex={0}
      fullScreen={false}
    />);
    const container = document.getElementById('picture-module-horizontal-scroll');
    const modal = document.getElementById('zoomPic');
    fireEvent.mouseEnter(container);
    fireEvent.mouseMove(container);

    expect(modal).toHaveStyle('backgroundImage: url("http://placeimg.com/498/498/arch?random=627")');
  });
});
