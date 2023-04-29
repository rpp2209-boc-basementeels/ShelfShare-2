import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  return (
    <h1>ShelfShare</h1> // Link to Home
    <table>
      <tbody>
        <tr>
          <td>
            <h2>My Profile</h2>
          </td>
          <td>
            <h2>My Orders</h2>
          </td>
        </tr>
      </tbody>
    </table>
  );
}