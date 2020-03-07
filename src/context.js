import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct
    }

    //component life cycle method
    componentDidMount(){
        this.storeProducts()

    }
    storeProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            //copy the value
            const singleItem ={...item};
            tempProducts = [...tempProducts,singleItem];

        })
        this.setState(() => {
            return {products:tempProducts}
        })
    }

    handleDetail = ()=>{
        console.log("hello")
    }

    addToCart = ()=>{
        console.log("cart me")
    }




    render(){
        return (
            <ProductContext.Provider value={{...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,

            
            }}>
                {this.props.children}
            
            </ProductContext.Provider>
            
        )
    }

}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};

export default ProductProvider;