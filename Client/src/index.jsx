import React from 'react';
import ReactDOM from 'react-dom';
import PicModule from './components/PicModule';

const ID = window.PRODUCT_ID < 0 || 99;

ReactDOM.render(<PicModule productId={ID} />, document.getElementById('app'));
