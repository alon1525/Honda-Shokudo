// src/components/Order.jsx
import React from 'react';
import image from '../image/order_image.png'

function Order() {
  return (
<div className="order" id="Order">
  <h1><span>Order</span>Now</h1>

  <div className="order_main">
    <div className="order_image">
      <img src={image} alt="Order Illustration" />
    </div>

    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input">
        <p>Name</p>
        <input type="text" placeholder="your name" />
      </div>

      <div className="input">
        <p>Email</p>
        <input type="email" placeholder="your email" />
      </div>

      <div className="input">
        <p>Number</p>
        <input type="tel" placeholder="your number" />
      </div>

      <div className="input">
        <p>How Much</p>
        <input type="number" placeholder="how many orders" />
      </div>

      <div className="input">
        <p>Your Order</p>
        <input placeholder="food name" />
      </div>

      <div className="input">
        <p>Address</p>
        <input placeholder="your address" />
      </div>

      <button type="submit" className="order_btn">Order Now</button>
    </form>
  </div>
</div>

  );
}

export default Order;
