/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Orders from './orders.jsx';


describe("Example tests", function () {
  test('sample test', () => {
    expect(true).toEqual(true);
  });
});

describe("Renders Orders", function () {

  test("Orders is a function", () => {
    expect(typeof Orders).toBe('function')
  });

  test('renders here', () => {
    render(<Orders/>);
    expect(screen.getByText(/Eel/)).toBeInTheDocument();
  });
});
