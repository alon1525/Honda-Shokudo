import React, { useContext } from 'react';
import mainImage from '../image/buger.jpg';
import { LanguageContext } from "../context/LanguageContext";

function Home() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      titleLine1: "Western Food",
      titleLine2: "With Japan",
      twist: "Twist",
      button: "Book A Table",
    },
    ja: {
      titleLine1: "洋食",
      titleLine2: "和風の",
      twist: "ひねり",
      button: "予約する",
    },
  };

  const t = content[language];

  return (
    <section className="home" id="home">
      <div className="main">
        <div className="main_content">
          <div className="men_text">
            <h1>
              {t.titleLine1}<br />
              {t.titleLine2}<span className="highlighted">{t.twist}</span>
            </h1>
          </div>
          <div className="main_btn">
            <a href="#Order">{t.button}</a>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <div className="main_image">
          <img src={mainImage} alt="burger" />
        </div>
      </div>
    </section>
  );
}

export default Home;
