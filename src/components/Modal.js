import React, { Component } from 'react'
// import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
      return (
          <ProductConsumer>
              {(value)=>{
                  const {modalOpen, closeModal} = value;
                  const {img, title, price} = value.modalProduct;
  
                  if(!modalOpen){
                      return null;
                  }else{
                      return (
                          <div className="modalStyle">
                          <div className="container ">
                              <div className="row">
                                  <div id="modal" 
                                  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                      <h5>item added to the cart</h5>
                                      <img src={img} className="img-fluid" alt="product"/>
                                      <h5>{title}</h5>
                                      <h5 className="text-muted">price: $ {price}</h5>
                                      <Link to='/shop'>
                                          <button className="shopButton" onClick={()=>closeModal()}>
                                              Back to store
                                          </button>
                                      </Link>
                                      <Link to='/cart'>
                                          <button className="shopButton" onClick={()=>closeModal()}>
                                              Go to cart
                                          </button>
                                      </Link>
                                  </div>
                              </div>
                          </div>  
                          </div>  
                      )    
                  }
              }}
          </ProductConsumer>
      );
    }
  }
