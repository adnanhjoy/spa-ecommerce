import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, reviewItemDelete}) => {
    const {id, img, name, quantity, price, shipping} = product;
    return (
        <div className='review-item'>
            <div className='review'>
                <img src={img} alt="" />
            </div>
            <div className='review-detail'>
                <div>
                    <h5>{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                <button onClick={() => reviewItemDelete(id)} className='delete-btn'>
                    <FontAwesomeIcon icon={faTrashAlt} className='delete-icon'></FontAwesomeIcon>
                </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;