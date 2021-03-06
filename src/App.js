import React from 'react';

import { Switch, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";




function App() {
  return (
      <React.Fragment>
        <Navbar />

       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Modal />
       
       
      </React.Fragment>
  );
}

export default App;
