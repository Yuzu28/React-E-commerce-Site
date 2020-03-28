import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/yin.png'} height="50" alt="store" className="navbar-brand"/>
            </Link>
    
            <ul className="navbar-nav align-items-center ">
              <li className="nav-item ml-5">
                 <Link to="/shop" className="nav-link">
                  Products
                 </Link>
              </li>
            </ul>
    
            <Link className="ml-auto" to="/cart">
                <button className="cartbutton">
                  <span className="mr-2">
                    <i className="fa fa-cart-plus"></i>
                  </span>
                  My Cart
                </button> 
            </Link>
    
          </nav>
        )
      }
}

export default Navbar