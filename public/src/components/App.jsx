import React, { useState, useEffect } from 'react';
import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import Footer from './homepage/Footer.jsx';
import Orders from './orders/orders.jsx';

const App = () => {

//conditional rendering of Gallery or Detail
return (

  <div>
    <Header />
    <Gallery />
    <Footer />
  </div>

)
}

export default App;