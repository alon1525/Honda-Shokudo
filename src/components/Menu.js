import React, { useState } from "react";
import image0 from "../image/desert.jpg";
import image1 from "../image/soup.jpg";
import image2 from "../image/Blue_Cheese_And_apple_risotto.jpg";
import image4 from "../image/Rissoto.jpg";
import image5 from "../image/Hot_dog.jpg";
import image6 from "../image/juse.jpg";
import image7 from "../image/biryani.webp";
import image8 from "../image/chocolate.jpg";
import image9 from "../image/ice_cream.jpg";
import image10 from "../image/Spanchi.jpg";
import image11 from "../image/sandwich.jpg";

function Menu() {
  const [menuItems] = useState([
    {
      name: "Cake",
      image: image0,
      price: 18.99,
      description: "Grilled to perfection with fresh ingredients.",
    },
    {
      name: "Soup",
      image: image1,
      price: 16.5,
      description: "Classic Italian pasta with creamy sauce.",
    },
    {
      name: "Risotto",
      image: image2,
      price: 19.25,
      description: "Blue Cheese And Apple Risotto.",
    },
    {
      name: "Rissoto",
      image: image4,
      price: 4.0,
      description: "Bacon and Spinach Rissoto.",
    },
    {
      name: "Pizza",
      image: image4,
      price: 21.99,
      description: "Wood-fired pizza with gooey cheese.",
    },
    {
      name: "Hot Dog",
      image: image5,
      price: 12.0,
      description: "Juicy sausage in a soft bun.",
    },
    {
      name: "Juice",
      image: image6,
      price: 3.5,
      description: "Fresh-squeezed fruit juice.",
    },
    {
      name: "Biryani",
      image: image7,
      price: 17.75,
      description: "Fragrant rice with spices and tender meat.",
    },
    {
      name: "Chocolate",
      image: image8,
      price: 5.5,
      description: "Rich and smooth chocolate bar.",
    },
    {
      name: "Ice Cream",
      image: image9,
      price: 6.99,
      description: "Cold and creamy dessert treat.",
    },
    {
      name: "Spanchi",
      image: image10,
      price: 7.25,
      description: "Delicate sponge cake with flavor.",
    },
    {
      name: "Sandwich",
      image: image11,
      price: 14.0,
      description: "Loaded sandwich with fresh fillings.",
    },
  ]);

  return (
    <div className="menu" id="Menu">
      <h1>
        Our <span>Menu</span>
      </h1>

      <div className="menu_box">
        {menuItems.map((item, index) => (
          <div className="menu_card" key={index}>
            <div className="menu_image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="small_card">
              <i className="fa-solid fa-heart"></i>
            </div>

            <div className="menu_info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h3>${item.price.toFixed(2)}</h3>

              <div className="menu_icon">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
