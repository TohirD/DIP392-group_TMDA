import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

    return (
        <div className='menu-item'>
            <div className='menu-item-img-wrapper'>
                <img className='menu-item-image' src={url + "/images/" + image} alt="" />
                {!cartItems[id] ? (
                    <img className='menu-item-add-btn' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                ) : (
                    <div className='menu-item-counter'>
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div>
                )}
            </div>
            <div className="menu-item-details">
                <div className="menu-item-header">
                    <p>{name}</p> 
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="menu-item-description">{desc}</p>
                <p className="menu-item-price">{currency}{price}</p>
            </div>
        </div>
    );
};


export default FoodItem
