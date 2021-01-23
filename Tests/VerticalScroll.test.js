/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import VerticalScroll from '../Client/src/components/VerticalScroll';

const thumbnails = ['http://placeimg.com/70/70/arch?random=568', 'http://placeimg.com/70/70/arch?random=250', 'http://placeimg.com/70/70/arch?random=918', 'http://placeimg.com/70/70/arch?random=775', 'http://placeimg.com/70/70/arch?random=303', 'http://placeimg.com/70/70/arch?random=434', 'http://placeimg.com/70/70/arch?random=826', 'http://placeimg.com/70/70/arch?random=876', 'http://placeimg.com/70/70/arch?random=789'];

describe('Vertical Scroll Component', () => {
  test('vertical scroll should render', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={0}
      idxSync={mockSync}
    />);
    expect(document.getElementById('picture-module-vertical-scroll')).toBeInTheDocument();
  });

  test('clicking an image should change focus to that picture\'s index', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={0}
      idxSync={mockSync}
    />);
    const scrollDiv = Array.from(document.getElementsByClassName('picture-module-vertical-scroll-img'));
    const imgBTN = scrollDiv[0].children[3];

    fireEvent.click(imgBTN);
    expect(mockSync.mock.calls.length).toBe(1);
  });

  test('clicking the Up chevron when currentFocus is zero, should change focus to 8', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={0}
      idxSync={mockSync}
    />);
    const button = Array.from(document.getElementsByClassName('vertical-scroll-topClick'));
    const upChevron = button[0];
    fireEvent.click(upChevron);

    expect(mockSync.mock.calls[0][0]).toBe(8);
  });

  test('clicking the Up chevron should decrease current focus by one', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={8}
      idxSync={mockSync}
    />);
    const button = Array.from(document.getElementsByClassName('vertical-scroll-topClick'));
    const upChevron = button[0];
    fireEvent.click(upChevron);

    expect(mockSync.mock.calls[0][0]).toBe(7);
  });

  test('clicking the down chevron when currentFocus is zero, should change focus to 1', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={0}
      idxSync={mockSync}
    />);
    const button = Array.from(document.getElementsByClassName('vertical-scroll-bottomClick'));
    const downChevron = button[0];
    fireEvent.click(downChevron);

    expect(mockSync.mock.calls[0][0]).toBe(1);
  });

  test('clicking the down chevron when currentFocus is 5, should change focus to 6', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={5}
      idxSync={mockSync}
    />);
    const button = Array.from(document.getElementsByClassName('vertical-scroll-bottomClick'));
    const downChevron = button[0];
    fireEvent.click(downChevron);

    expect(mockSync.mock.calls[0][0]).toBe(6);
  });

  test('clicking the down chevron when currentFocus is the 8, should change focus to 0', () => {
    const mockSync = jest.fn((arg) => arg);
    render(<VerticalScroll
      thumbnails={thumbnails}
      focus={8}
      idxSync={mockSync}
    />);
    const button = Array.from(document.getElementsByClassName('vertical-scroll-bottomClick'));
    const downChevron = button[0];
    fireEvent.click(downChevron);

    expect(mockSync.mock.calls[0][0]).toBe(0);
  });
});
