import React from "react";
import image0 from '../image/buger.jpg';
import image1 from '../image/pasta.jpg';
import image2 from '../image/lasagna.webp';
import image3 from '../image/chocolate_Drink.jpg';
import image4 from '../image/pizza.jpg';
import image5 from '../image/Hot_dog.jpg';
import image6 from '../image/juse.jpg';
import image7 from '../image/biryani.webp';
import image8 from '../image/chocolate.jpg';
import image9 from '../image/ice_cream.jpg';
import image10 from '../image/Spanchi.jpg';
import image11 from '../image/sandwich.jpg';


// Example menu data
const menuItems = [
    { name: "Burger", image: image0 },
    { name: "Pasta", image: image1 },
    { name: "Lasagna", image: image2 },
    { name: "Drink", image: image3 },
    { name: "Pizza", image: image4 },
    { name: "Hot Dog", image: image5 },
    { name: "Juice", image: image6 },
    { name: "Biryani", image: image7 },
    { name: "Chocolate", image: image8 },
    { name: "Ice Cream", image: image9 },
    { name: "Spanchi", image: image10 },
    { name: "Sandwich", image: image11 },
  ];

function Menu() {
  return (
    <div className="menu" id="Menu">
      <h1>
        Our<span>Menu</span>
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
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
              </p>
              <h3>$20.00</h3>
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
