import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";

class Product extends Component {
    render(){
        const {id, title, img, price,productDescription, inCart} = this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
              




                <div className="img-container p-5" onClick={()=>console.log("click me")}>
                
                    <Link to="/details">

                        <img src={img} alt="product img" className="card-img-top" />
                    </Link>


                      <button className="cart-btn small-btn float-right"  disabled={inCart?true:false} onClick={()=>{console.log("added to the cart")}}>


                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                Item In Cart
                                </p>
                                    ) : (
                                        <i className="fa fa-cart-plus" />
                                    )}


        </button>
                </div>
              
                </div>

                {/* card footer */}

                  <div className="card-footer d-flex justify-content-between bblock">

                    <h5><p className="align-self-center mb-0 titlecard ">{title}</p></h5>

                    <h5 className="mb-0 price">

                        <span className="mr-1">$</span> {price}
                    </h5>



                   </div> 

                    

                
            </div>
        )
    }
}



export default Product