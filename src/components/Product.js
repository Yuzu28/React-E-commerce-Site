import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";

class Product extends Component {
    render(){
        const {id, title, img, price,productDescription, inCart} = this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log("click me")}></div>
                
                <Link to="/details">

                <img src={img} alt="product img" className="card-img-top" />
                </Link>

                <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{console.log("added to the cart")}}>


                {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      Item In Cart
                    </p>
                  ) : (
                    <i className="fa fa-cart-plus" />
                  )}
                
                
                
                
                
                
                
                
                </button>
                </div>


                
                {/* <h3>Product Component</h3> */}
            </div>
        )
    }
}



export default Product