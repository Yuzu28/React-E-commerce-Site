import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';


class Details extends Component {
    render(){
        return(
            <ProductConsumer>

                {(value) =>{
                    const {id,img, price,title,inCart,info, productDescription} =  value.detailProduct
                    // console.log(value.detailProduct)
                
                return (
                   <div className="container py-5">

                   {/* title of product section begin*/}
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {/* title of product section end*/}

                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 ">
                            <img src={img} className="img-fluid" alt="product img" />

                        </div>

                         <div className="col-10 mx-auto col-md-6 my-3 ">
                            <h1>{title}</h1>
                            <p className="text-title   mt-4 mb-2">
                                <strong>About:</strong> {info}
                            </p>


                            <p className="text-title   mt-4 mb-2"><strong>Product Description: </strong> {productDescription}</p>

                            <h4 className="text-title   mt-4 mb-2">
                                <strong>Price: <span>$</span> {price}</strong>
                            </h4>


                                                    <Link to="/shop">
                          <button className=" shopButton mt-4 mb-2">Back to Products</button>
                          </Link>

                          <button className="  shopButton mt-4 mb-2"                             
                          disabled={inCart?true:false}
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                              console.log("you click me")
                            }}
                          >
                            {inCart ? "inCart":"Add to Cart"}</button>

                          

                        </div>

                    
                    
                    </div>





                   </div>
                )
                
                
                }}




            </ProductConsumer>




        )
    }
}

export default Details