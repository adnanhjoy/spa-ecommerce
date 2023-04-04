import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container"> This section is for cart</div>
        </div>
    );
};

export default Shop;