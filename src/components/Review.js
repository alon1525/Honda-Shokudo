// src/components/Review.jsx
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import review1 from '../image/review_1.png';
import review2 from '../image/review_2.png';
import review3 from '../image/review_3.png';
import review4 from '../image/review_4.png';

const reviews = [
    { name: "John Deo", image: review1 },
    { name: "John Deo", image: review2 },
    { name: "John Deo", image: review3 },
    { name: "John Deo", image: review4 },
  ];
  function Review() {
    return (
      <div className="review" id="Review">
        <h1>Customer<span>Review</span></h1>
  
        <div className="review_box">
          {reviews.map((review, index) => (
            <div className="review_card" key={index}>
              <div className="review_profile">
                <img src={review.image} alt={`review ${index + 1}`} />
              </div>
  
              <div className="review_text">
                <h2 className="name">{review.name}</h2>
  
                <div className="review_icon">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
  
                <div className="review_social">
                  <FaFacebookF /><FaInstagram /><FaTwitter /><FaLinkedinIn />
                </div>
  
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                  blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                  asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                  dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                  repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                  pariatur. Fuga aperiam impedit illo atque repellendus!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Review;
  