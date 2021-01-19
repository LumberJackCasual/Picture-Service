import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import PicModule from '../Client/src/components/PicModule.jsx';
// const PicModule = require('../Client/src/components/PicModule.jsx');

test('picmodule should render', () => {
  render(<PicModule />)
  expect( document.getElementById("flex-container")).toBeInTheDocument()
})