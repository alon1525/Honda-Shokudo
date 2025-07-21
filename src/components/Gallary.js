import React, { useState } from 'react';

import image1 from '../image/Meat.jpg';
import image2 from '../image/egg.jpg';
import image3 from '../image/desert.jpg';
import image4 from '../image/soup.jpg';
import image5 from '../image/Rissoto.jpg';
import image6 from '../image/pretty.jpg';

function Gallery() {
  const [galleryImages] = useState([
    {
      image: image1,
      title: "Food",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam",
    },
    {
      image: image2,
      title: "Food",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam",
    },
    {
      image: image3,
      title: "Food",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam",
    },
    {
      image: image4,
      title: "Food",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam",
    },
    {
      image: image5,
      title: "Food",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam",
    },
    {
      image: image6,
      title: "Food",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam",
    },
  ]);

  return (
    <div className="gallary" id="Gallary">
      <h1>
        Our <span>Gallary</span>
      </h1>

      <div className="gallary_image_box">
        {galleryImages.map((item, index) => (
          <div className="gallary_image" key={index}>
            <img src={item.image} alt={`Gallery ${index + 1}`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;