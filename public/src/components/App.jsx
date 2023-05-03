import React, { useState, useEffect } from 'react';
import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import Footer from './homepage/Footer.jsx';
import Orders from './orders/orders.jsx';

const App = () => {

  const [clickedOnOrder, setClickedOnOrder] = useState(false);

//conditional rendering of Gallery or Detail
return (

  <div>
    <Header />
    <Gallery />
    <Footer />
    <button onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </button>
    {clickedOnOrder ? <Orders/> : null}
  </div>

)
}

export default App;