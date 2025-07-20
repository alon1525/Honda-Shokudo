import React from 'react';

// Image imports
import image1 from '../image/gallary_1.jpg';
import image2 from '../image/gallary_2.jpg';
import image3 from '../image/gallary_3.jpg';
import image4 from '../image/gallary_4.jpg';
import image5 from '../image/gallary_5.jpg';
import image6 from '../image/gallary_6.jpg';

const galleryImages = [
  { image: image1, title: "Food", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam" },
  { image: image2, title: "Food", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam" },
  { image: image3, title: "Food", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam" },
  { image: image4, title: "Food", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam" },
  { image: image5, title: "Food", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam" },
  { image: image6, title: "Food", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam" },
];

function Gallery() {
  return (
    <div className="gallary" id="Gallary">
      <h1>Our <span>Gallary</span></h1>

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
