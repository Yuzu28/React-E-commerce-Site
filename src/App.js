import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';




function App() {
  return (
      <React.Fragment>
        <Navbar></Navbar>
        <ProductList></ProductList>
        <Product></Product>
        <Details></Details>
        <Cart></Cart>
        <Default></Default>
        <h3>Hello app</h3>
      </React.Fragment>
  );
}

export default App;
