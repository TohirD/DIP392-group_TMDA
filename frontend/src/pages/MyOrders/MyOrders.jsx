import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  
  const [data,setData] =  useState([]);
  const {url,token,currency} = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data)
  }

  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])

  return (
    <div className='order-history'>
      <h2>My Orders</h2>
      <div className="order-list">
        {data.map((order, index) => {
          return (
            <div key={index} className='order-item'>
                <img src={assets.parcel_icon} alt="" />
                <div className="order-info">
                  <p><b>Order #:</b> {order.orderNumber}</p>
                  <p><b>Date & Time:</b> {new Date(order.date).toLocaleString("en-GB", { timeZone: "Europe/Riga" })}</p>
                </div>
                <p>
                  {order.items.map((item, index) => {
                    return index === order.items.length - 1 
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `;
                  })}
                </p>
                <p>{currency}{order.amount}</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
);


}

export default MyOrders
