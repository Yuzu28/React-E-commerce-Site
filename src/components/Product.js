import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import PropTypes from 'prop-types';

class Product extends Component {
    render(){
        const {id, title, img, price,productDescription, inCart} = this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
              

            <ProductConsumer>
                {(value) =>(
                


                <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                
                    <Link to="/details">

                        <img src={img} alt="product img" className="card-img-top" />
                    </Link>


                      <button className="cart-btn small-btn float-right"  disabled={inCart?true:false} 
                      onClick={()=>{value.addToCart(id);
                        value.openModal(id);
                    
                    }}>


                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                Item In Cart
                                </p>
                                    ) : (
                                        <i className="fa fa-cart-plus" />
                                    )}


        </button>
                </div>

                )}
                </ProductConsumer>

              
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

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
  };
  



export default Product