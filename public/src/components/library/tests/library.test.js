/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { server } from './server.js'
import GenreFilter from '../helper functions/GenreFilter.jsx';
import DateParser from '../helper functions/DateParser.jsx';
import ScanButton from '../sub-components/ScanButton.jsx';
import Shelf from '../sub-components/Shelf.jsx';
import Borrowed from '../sub-components/Borrowed.jsx';
import Lent from '../sub-components/Lent.jsx';

beforeAll(() => server.listen({
  onUnhandledRequest: 'error'
}));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('display shelf', async () => {
  const { getByText } = render(<Shelf />);
  expect(await getByText(/MY SHELF/)).toBeInTheDocument();
});

test('display borrowed', async () => {
  const { getByText } = render(<Borrowed />);
  expect(await getByText(/BORROWED/)).toBeInTheDocument();
});

test('display lent', async () => {
  const { getByText } = render(<Lent />);
  expect(await getByText(/LENT/)).toBeInTheDocument();
});

test('genres filter correctly', () => {
  const genre = GenreFilter([{name: 'Eels'}, {name: 'Animals'}, {name: 'Fantasy'}])
  expect(genre).toBe('Fantasy');
});

test('dates parse correctly', () => {
  const date = DateParser('Apr 03, 2017')
  expect(date).toBe('2017-04-03');
});
