import React,{useContext} from "react";
import "../menu.css";
import { LanguageContext } from "../context/LanguageContext";

const menuItems = {
  en: [
    {
      category: "Soft Drinks",
      items: [
        { name: "Apple Juice (Shinshu)", price: "600円" },
        { name: "Ginger Ale", price: "400円" },
        { name: "Mineral Water", price: "400円" },
        { name: "Coffee (Hot/Ice)", price: "400円" },
        { name: "Alcohol-Free Beer", price: "600円" },
        { name: "Alcohol-Free Sparkling Wine", price: "1200円" },
        { name: "Cider (local sparkling apple)", price: "600円" },
        { name: "Ume Soda (plum syrup soda)", price: "600円" },
        { name: "Tea (Hot/Ice)", price: "400円" },
      ],
    },
    {
      category: "Beer",
      items: [
        { name: "Yatsugatake 8Peaks Brewing", price: "800円" },
        { name: "Yatai (Hops & Fruits)", price: "—" },
        { name: "Mont ALE (Yatsugatake IPA)", price: "—" },
        { name: "Ise Beer", price: "900円" },
        { name: "Aka Matsu Indian Pale Ale", price: "—" },
        { name: "Sapporo Label (bottle)", price: "800円" },
      ],
    },
    {
      category: "Alcohol",
      items: [
        { name: "Takatenkara Umeshu (Plum Wine)", price: "600円" },
        { name: "Mars Whisky Highball", price: "600円" },
      ],
    },
  ],
  jp: [
    {
      category: "ソフトドリンク",
      items: [
        { name: "りんごジュース（信州）", price: "600円" },
        { name: "ジンジャーエール", price: "400円" },
        { name: "ミネラルウォーター", price: "400円" },
        { name: "コーヒー（ホット／アイス）", price: "400円" },
        { name: "ノンアルコールビール", price: "600円" },
        { name: "ノンアルスパークリングワイン", price: "1200円" },
        { name: "シードル（地元のりんご炭酸）", price: "600円" },
        { name: "梅ソーダ（自家製梅シロップ）", price: "600円" },
        { name: "お茶（ホット／アイス）", price: "400円" },
      ],
    },
    {
      category: "ビール",
      items: [
        { name: "八ヶ岳 8Peaks Brewing", price: "800円" },
        { name: "Yatai（ホップ果実系）", price: "—" },
        { name: "Mont ALE（八ヶ岳 IPA）", price: "—" },
        { name: "伊勢ビール", price: "900円" },
        { name: "赤松インディアンペールエール", price: "—" },
        { name: "サッポロ黒ラベル（瓶）", price: "800円" },
      ],
    },
    {
      category: "お酒",
      items: [
        { name: "高天からくち梅酒", price: "600円" },
        { name: "マルスウイスキーハイボール", price: "600円" },
      ],
    },
  ],
};


function Menu() {
  const { language } = useContext(LanguageContext);
  return (
    <section className="menu-section" id="Menu">
      {language === "en"?       <h1 className="menu-title">
        Drink <span>Menu</span>
      </h1> :       <h1 className="menu-title">
        ドリンク <span>メニュー</span>
      </h1>}

      <div className="menu-container">
        {menuItems[language].map((group, index) => (
          <div className="menu-group" key={index}>
            <h2 className="menu-category">{group.category}</h2>
            <ul className="menu-list">
              {group.items.map((item, idx) => (
                <li className="menu-item" key={idx}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
