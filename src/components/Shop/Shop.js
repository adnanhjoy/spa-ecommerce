import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [size, setSize] = useState(10);
    const [page, setPage] = useState(0);

    const perPage = Math.ceil(count / size);
    console.log(perPage)


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
    }, [page, size])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [products])

    const addToCart = (product) => {
        let newCart = [];
        const exixt = cart.find(selecProduct => selecProduct._id === product._id);
        if (!exixt) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(selecProduct => selecProduct._id !== product._id);
            exixt.quantity = exixt.quantity + 1;
            newCart = [...rest, exixt];
        }
        setCart(newCart);
        addToDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className='pagination'>
                {
                    [...Array(perPage).keys()].map(number =>
                        <button
                            onClick={() => setPage(number)}
                            className={page === number ? 'active-button' : 'pagination-btn'}>
                            {number+1}
                        </button>)
                }
            </div>
        </div>
    );
};

export default Shop;