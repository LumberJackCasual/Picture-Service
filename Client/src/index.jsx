import React from 'react';
import ReactDOM from 'react-dom';
import PicModule from './components/PicModule';

const params = (new URL(window.location)).searchParams;
const product = params.get('product');
const ID = product >= 0 ? +product : 99;

ReactDOM.render(<PicModule productId={ID} />, document.getElementById('app'));
