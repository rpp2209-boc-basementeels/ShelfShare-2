/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';


describe("Example tests", function () {
  test('sample test', () => {
    expect(true).toEqual(true);
  });
});

describe("Renders the Header", function () {

  test('Renders the Header', () => {
    render(<Header term={'raw'} user={{}} allBooks={[]}/>);
    expect(screen.getByText(/ShelfShare/)).toBeInTheDocument();
  });
});

describe("Renders the Gallery", function () {

  test('Displays `no matching titles` message when there are not books to display', () => {
    render(<Gallery books={[]}/>);
    expect(screen.getByText(/Sorry, No Matching Titles!/)).toBeInTheDocument();
  });

  test('Displays `no matching titles` message when there are not books to display', () => {
    render(<Gallery books={[{}]}/>);
    expect(screen.getByText(/More Information/)).toBeInTheDocument();
  });

});