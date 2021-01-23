/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import PicModule from '../Client/src/components/PicModule';

describe('PicModule', () => {
  // const server = setupServer(
  //   rest.get('/api/', (req, res, ctx) => res.name(ctx.json(
  //     [
  //       {
  //         largePics: [
  //           'http://placeimg.com/498/498/arch?random=989',
  //           'http://placeimg.com/498/498/arch?random=475',
  //           'http://placeimg.com/498/498/arch?random=552',
  //           'http://placeimg.com/498/498/arch?random=301',
  //           'http://placeimg.com/498/498/arch?random=352',
  //           'http://placeimg.com/498/498/arch?random=910',
  //           'http://placeimg.com/498/498/arch?random=46',
  //           'http://placeimg.com/498/498/arch?random=632',
  //           'http://placeimg.com/498/498/arch?random=796',
  //         ],
  //         thumbnails: [
  //           'http://placeimg.com/70/70/arch?random=9',
  //           'http://placeimg.com/70/70/arch?random=579',
  //           'http://placeimg.com/70/70/arch?random=416',
  //           'http://placeimg.com/70/70/arch?random=364',
  //           'http://placeimg.com/70/70/arch?random=174',
  //           'http://placeimg.com/70/70/arch?random=15',
  //           'http://placeimg.com/70/70/arch?random=58',
  //           'http://placeimg.com/70/70/arch?random=745',
  //           'http://placeimg.com/70/70/arch?random=998',
  //         ],
  //         _id: '60039091a1741671d7807c22',
  //         product_id: 23,
  //         description: 'Practical Rubber Pants',
  //         __v: 0,
  //       },
  //     ],
  //   ))),
  // );
  // beforeAll(() => server.listen());
  // afterEach(() => server.resetHandlers());
  // afterAll(() => server.close());

  test('picmodule should render', () => {
    render(<PicModule />);
    expect(document.getElementById('flex-container')).toBeInTheDocument();
  });
});
