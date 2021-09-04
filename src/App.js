import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';

function App() {

  const [data, setData] = useState(
    [
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Fancy Product',
          presentPrice : '$40.00 - $80.00',
          sale : false,
          cart : false
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Special Item',
          oldPrice : '$20.00',
          presentPrice : '$18.00',
          sale : true,
          rating : 5,
          cart : false
          
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Sale Item',
          oldPrice : '$50.00',
          presentPrice : '$25.00',
          sale : true,
          cart : false
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Popular Item',
          presentPrice : '$40.00',
          sale : false,
          rating : 5,
          cart : false
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Sale Item',
          oldPrice : '$50.00',
          presentPrice : '$25.00',
          sale : true,
          cart : false
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Fancy Product',
          presentPrice : '$120.00 - $280.00',
          sale : false,
          cart : false
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Special Item',
          oldPrice : '$20.00',
          presentPrice : '$18.00',
          sale : true,
          cart : false
      },
      {
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          name : 'Popular Item',
          presentPrice : '$40.00',
          sale : false,
          rating : 5,
          cart : false
      }
  ]
  )
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (key) => {
    
    let datas = data;
    datas[key].cart = true;
    setData(datas);
    // setData([...data,data[key].cart = true])
    setCartCount(cartCount + 1);
  }

  const removeFromCart = (key) => {
    
    let datas = data;
    datas[key].cart = false;
    setData(datas);
    // setData([...data,data[key].cart = false])
    setCartCount(cartCount - 1);
  }
  

  return (
    <>
      <Navbar cartCount = {cartCount}/>
      <Head />
      <CardSection data = {data} addToCart = {addToCart} removeFromCart = {removeFromCart}/>
      <Footer />
    </>
  );
}

export default App;
