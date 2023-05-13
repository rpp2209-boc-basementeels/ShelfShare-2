/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Orders from './orders.jsx';
import BorrowedList from './borrowedList.jsx';
import LoanedList from './loanedList.jsx';
import PendingList from './pendingList.jsx';


describe("Example tests", function () {
  test('sample test', () => {
    expect(true).toEqual(true);
  });
});

describe("Renders Orders Take", function () {

  test("Orders is a function", () => {
    expect(typeof Orders).toBe('function')
  });

  test('renders here', () => {
    render(<Orders/>);
    expect(screen.getByText(/Loaned/)).toBeInTheDocument();
  });
});

describe("Error Boundaries Take Effect", function () {

  test('Borrowed Boundary', () => {
    render(<BorrowedList borrow={[]}/>);
    expect(screen.getByText(/borrowed/)).toBeInTheDocument();
  });

  test('Loaned Boundary', () => {
    render(<LoanedList loan={[]}/>);
    expect(screen.getByText(/loaned/)).toBeInTheDocument();
  });

  test('Pending Boundary', () => {
    render(<PendingList pending={[]}/>);
    expect(screen.getByText(/pending/)).toBeInTheDocument();
  });

});
