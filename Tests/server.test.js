/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import axios from 'axios';

test('server should return an item from axios get request', () => {
  axios.get('/api/').then((data) => expect(data.data[0].thumbnails.length).toEqual(9)).catch((err) => err);
});
