/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import PicModule from '../Client/src/components/PicModule';

describe('PicModule', () => {
  test('picmodule should render', () => {
    render(<PicModule />);
    expect(document.getElementById('flex-container')).toBeInTheDocument();
  });
});
