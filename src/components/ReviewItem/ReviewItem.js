import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {

    const { product, hundleRemoveProduct } = props;

    const { name, img, price, shipping, quantity } = product;
    return (
        <div className="review-item">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className='review-items-details-container '>
                <div className="review-items-details">
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p><span className='orange-color'>{price}</span></p>
                    <p><small>Shipping {shipping}</small></p>
                    <p><small>quantity :{quantity}</small></p>


                </div>
                <div className="delete-container">
                    <button onClick={() => hundleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt
                        }></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;