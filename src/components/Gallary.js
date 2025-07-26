import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

import image1 from '../image/Meat.jpg';
import image2 from '../image/egg.jpg';
import image3 from '../image/desert.jpg';
import image4 from '../image/soup.jpg';
import image5 from '../image/Rissoto.jpg';
import image6 from '../image/pretty.jpg';

function Gallery() {
  const { language } = useContext(LanguageContext);

  const galleryContent = {
    en: [
      { image: image1, title: "Grilled Steak", description: "Juicy meat with our signature sauce." },
      { image: image2, title: "Tamago Bowl", description: "Soft eggs over seasoned rice." },
      { image: image3, title: "Dessert Plate", description: "A sweet finish to your meal." },
      { image: image4, title: "Miso Soup", description: "Classic Japanese soup to warm you up." },
      { image: image5, title: "Risotto", description: "Creamy risotto with local vegetables." },
      { image: image6, title: "Plated Dish", description: "A beautifully arranged main course." },
    ],
    jp: [
      { image: image1, title: "グリルステーキ", description: "ジューシーなお肉と特製ソース。" },
      { image: image2, title: "卵かけご飯", description: "ふわふわ卵と味付けご飯の絶品。" },
      { image: image3, title: "デザートプレート", description: "食後にぴったりの甘味です。" },
      { image: image4, title: "味噌汁", description: "心も体も温まる和風スープ。" },
      { image: image5, title: "リゾット", description: "地元野菜を使ったクリーミーな一品。" },
      { image: image6, title: "美しい盛り付け", description: "目でも楽しめるメイン料理。" },
    ],
  };

  const headingText = {
    en: { normal: "Our", highlighted: "Gallery" },
    jp: { normal: "私たちの", highlighted: "ギャラリー" },
  };

  const images = galleryContent[language] || galleryContent.en;
  const heading = headingText[language] || headingText.en;

  return (
    <div className="gallary" id="Gallary">
      <h1>
        {heading.normal} <span>{heading.highlighted}</span>
      </h1>

      <div className="gallary_image_box">
        {images.map((item, index) => (
          <div className="gallary_image" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
