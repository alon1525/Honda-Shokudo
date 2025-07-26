import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

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
  const { language } = useContext(LanguageContext);

  const menuItems = [
    {
      name: { en: "Cake", ja: "ケーキ" },
      image: image0,
      price: 18.99,
      description: {
        en: "Grilled to perfection with fresh ingredients.",
        ja: "新鮮な材料で完璧に焼き上げました。",
      },
    },
    {
      name: { en: "Soup", ja: "スープ" },
      image: image1,
      price: 16.5,
      description: {
        en: "Classic Italian pasta with creamy sauce.",
        ja: "クリーミーなソースのクラシックなイタリアンパスタ。",
      },
    },
    {
      name: { en: "Risotto", ja: "リゾット" },
      image: image2,
      price: 19.25,
      description: {
        en: "Blue Cheese And Apple Risotto.",
        ja: "ブルーチーズとリンゴのリゾット。",
      },
    },
    {
      name: { en: "Rissoto", ja: "リゾット" },
      image: image4,
      price: 4.0,
      description: {
        en: "Bacon and Spinach Rissoto.",
        ja: "ベーコンとほうれん草のリゾット。",
      },
    },
    {
      name: { en: "Pizza", ja: "ピザ" },
      image: image4,
      price: 21.99,
      description: {
        en: "Wood-fired pizza with gooey cheese.",
        ja: "薪窯で焼いたとろけるチーズのピザ。",
      },
    },
    {
      name: { en: "Hot Dog", ja: "ホットドッグ" },
      image: image5,
      price: 12.0,
      description: {
        en: "Juicy sausage in a soft bun.",
        ja: "柔らかいパンにジューシーなソーセージ。",
      },
    },
    {
      name: { en: "Juice", ja: "ジュース" },
      image: image6,
      price: 3.5,
      description: {
        en: "Fresh-squeezed fruit juice.",
        ja: "搾りたてのフルーツジュース。",
      },
    },
    {
      name: { en: "Biryani", ja: "ビリヤニ" },
      image: image7,
      price: 17.75,
      description: {
        en: "Fragrant rice with spices and tender meat.",
        ja: "スパイスと柔らかい肉の香り高いご飯。",
      },
    },
    {
      name: { en: "Chocolate", ja: "チョコレート" },
      image: image8,
      price: 5.5,
      description: {
        en: "Rich and smooth chocolate bar.",
        ja: "濃厚で滑らかなチョコレートバー。",
      },
    },
    {
      name: { en: "Ice Cream", ja: "アイスクリーム" },
      image: image9,
      price: 6.99,
      description: {
        en: "Cold and creamy dessert treat.",
        ja: "冷たくクリーミーなデザート。",
      },
    },
    {
      name: { en: "Spanchi", ja: "スポンジケーキ" },
      image: image10,
      price: 7.25,
      description: {
        en: "Delicate sponge cake with flavor.",
        ja: "繊細な味わいのスポンジケーキ。",
      },
    },
    {
      name: { en: "Sandwich", ja: "サンドイッチ" },
      image: image11,
      price: 14.0,
      description: {
        en: "Loaded sandwich with fresh fillings.",
        ja: "新鮮な具材が詰まったサンドイッチ。",
      },
    },
  ];

  return (
    <div className="menu" id="Menu">
      <h1>
        {language === "en" ? (
          <>
            Our <span>Menu</span>
          </>
        ) : (
          <>
            私たちの <span>メニュー</span>
          </>
        )}
      </h1>

      <div className="menu_box">
        {menuItems.map((item, index) => (
          <div className="menu_card" key={index}>
            <div className="menu_image">
              <img src={item.image} alt={item.name[language]} />
            </div>

            <div className="small_card">
              <i className="fa-solid fa-heart"></i>
            </div>

            <div className="menu_info">
              <h2>{item.name[language]}</h2>
              <p>{item.description[language]}</p>
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
