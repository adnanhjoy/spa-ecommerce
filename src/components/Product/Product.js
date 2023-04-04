import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {addToCart, product} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} starts</p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'><p className='btn-name'>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;