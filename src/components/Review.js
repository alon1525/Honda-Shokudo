import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
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
import { LanguageContext } from "../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = {
  en: [
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
  ],
  jp: [
    {
      name: "Cecily Vix",
      image: review1,
      text: `最高の食事！シェフ/オーナーはベジタリアン2名のために、最も美味しくて素晴らしいサラダ、リゾット、スープを用意してくれました。肉食の2名も野生のイノシシと鹿肉を大変気に入りました。このレストランのすべてが大好きで、発見できてラッキーでした！`,
    },
    {
      name: "Mira Maas",
      image: review2,
      text: "美味しい料理！！そしてスタッフもとても親切。日本での最高のグルメ体験でした。",
    },
    {
      name: "川上桃子",
      image: review3,
      text: "地元の美味しい野菜と肉を使った季節の料理を楽しみました！とても美味しくて感動しました！諏訪に行ったらまた必ず訪れたいレストランです。",
    },
    {
      name: "Andreas Blicher",
      image: review4,
      text: `素晴らしく美味しいレストランです。おそらく世界中で最高の西洋料理体験の一つ。とてもリラックスでき、心から親切なサービスも良かったです。`,
    },
  ],
};

function Review() {
  const { language } = useContext(LanguageContext);
  const reviewList = reviews[language] || reviews.en;

  const title = language === "jp" ? "お客様のレビュー" : "Customer Review";

  return (
    <div className="review" id="Review">
      <h1>
        {title.split("お客様の").length > 1 ? (
          <>
            <span>お客様の</span>レビュー
          </>
        ) : (
          <>
            Customer<span>Review</span>
          </>
        )}
      </h1>
      <div className= "review_box">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviewList.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review_card">
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
                  <FaStar />
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
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default Review;
