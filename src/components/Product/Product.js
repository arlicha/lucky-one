import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
// import {   faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, addToCart} = props;
    const {name, img, seller, price } = product;
     
//    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='product-name'>{name}</h4>
            <div className="product-info">
                 <p>{seller}</p>
                 <p>Price: <b>${price}</b> </p>
                 
            </div>


            <button onClick={() => addToCart(product) }  className='btn-cart'>
                <p className='btn-tex'>Add To Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> */}
            </button>
             

        </div>
    );
};

export default Product;