// src/components/Order.jsx
import React, { useState } from "react";
import image from "../image/order_image.png";

function Order() {

    const [timeOptions] = useState([
        "Lunch 20/4",
        "Dinner 20/4",
        "Lunch 21/4",
        "Dinner 21/4",
      ]);
  return (
    <div className="order" id="Order">
      <h1>
        <span>Order</span>Now
      </h1>

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
            <p>Phone Number</p>
            <input type="tel" placeholder="your number" />
          </div>

          <div className="input">
            <p>How Many People</p>
            <input
              type="number"
              placeholder="How Many People"
              min="1"
              max="9"
            />
          </div>

          <div className="input">
            <p>Date and Meal</p>
            <select name="meal" defaultValue="">
              <option value="" disabled>
                Select Time of order
              </option>
              {timeOptions.map((meal, index) => (
                <option value={meal.toLowerCase()} key={index}>
                  {meal}
                </option>
              ))}
            </select>
          </div>


          <button type="submit" className="order_btn">
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Order;
