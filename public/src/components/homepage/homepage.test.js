/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import BookCard from './BookCard.jsx';
import Footer from './Footer.jsx';


describe("Example tests", function () {
  test('sample test', () => {
    expect(true).toEqual(true);
  });
});

describe("Renders the Header and Footer", function () {

  test('Renders the Header', () => {
    render(<Header term={'raw'} user={{}} allBooks={[]}/>);
    expect(screen.getByText(/ShelfShare/)).toBeInTheDocument();
  });

  test('Renders the Footer', () => {
    render(<Footer />);
    expect(screen.getByText(/ShelfShare/)).toBeInTheDocument();
  });
});

describe("Renders the Gallery", function () {

  test('Displays `no matching titles` message when there are not books to display', () => {
    render(<Gallery books={[]}/>);
    expect(screen.getByText(/Sorry, No Matching Titles!/)).toBeInTheDocument();
  });

  test('Renders Book Cards', () => {
    render(<BookCard authors={[]} id={7} books={[{}]} title={'A Tale for the Time Being'} image={'bookimage.png'}/>);
    expect(screen.getByText(/More Information/)).toBeInTheDocument();
  });

});
