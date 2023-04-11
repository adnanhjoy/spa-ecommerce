import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const savedCart = useLoaderData();
    console.log(savedCart)
    return (
        <div>
            
            {/* <h1>Order Page{products.length}</h1> */}
            <h1>Initial{savedCart.length}</h1>

        </div>
    );
};

export default Order;