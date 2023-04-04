import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} starts</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;