/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.jsx';


describe("Example tests", function () {
  test('sample test', () => {
    expect(true).toEqual(true);
  });
});

// describe("Renders the Header", function () {

//   // test("Orders is a function", () => {
//   //   expect(typeof Orders).toBe('function')
//   // });

//   test('renders here', () => {
//     render(<Header/>);
//     expect(screen.getByText(/Header/)).toBeInTheDocument();
//   });
// });
