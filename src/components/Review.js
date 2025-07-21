// src/components/Review.jsx
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import review1 from "../image/unnamed.png";
import review2 from "../image/unnamed (1).png";
import review3 from "../image/unnamed (2).png";
import review4 from "../image/unnamed (3).png";

const reviews = [
  {
    name: "Cecily Vix",
    image: review1,
    text: `Best meal! Chef/owner accommodated two vegetarians with the most delicious and gorgeous salad, risotto, soup. Two meat eaters loved their wild boar and venison. Loved everything about this restaurant and felt lucky to discover it!`,
  },
  {
    name: "Mira Maas",
    image: review2,
    text: "Delicious food!! And the people are so nice. My best culinary experience in Japan.",
  },
  {
    name: "川上桃子",
    image: review3,
    text: "I enjoyed the seasonal dishes made with delicious local vegetables and meat! It was so delicious I was moved! It's a restaurant I'd definitely like to visit again when I go to Suwa.",
  },
  {
    name: "Andreas Blicher",
    image: review4,
    text: `Spectacularly good restaurant - possibly the best western food experience I’ve ever had at a restaurant anywhere in the world. Very relaxed and genuinely friendly service too.`,
  },
];
function Review() {
  return (
    <div className="review" id="Review">
      <h1>
        Customer<span>Review</span>
      </h1>

      <div className="review_box">
        {reviews.map((review, index) => (
          <div className="review_card" key={index}>
            <div className="review_profile">
              <img src={review.image} alt={`review ${index + 1}`} />
            </div>

            <div className="review_text">
              <h2 className="name">{review.name}</h2>

              <div className="review_icon">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>

              <div className="review_social">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>

              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
