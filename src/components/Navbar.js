import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import team3 from '../image/logo.png';

function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Translation labels
  const labels = {
    Home: language === "en" ? "Home" : "ホーム",
    About: language === "en" ? "About" : "私たちについて",
    Menu: language === "en" ? "Menu" : "メニュー",
    Gallary: language === "en" ? "Gallery" : "ギャラリー",
    Review: language === "en" ? "Review" : "レビュー",
    Order: language === "en" ? "Order" : "予約",
    ToggleButton: language === "en" ? "日本語" : "English",
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={team3} alt="logo" />
        </div>

        <ul>
          <li><a href="#Home">{labels.Home}</a></li>
          <li><a href="#About">{labels.About}</a></li>
          <li><a href="#Menu">{labels.Menu}</a></li>
          <li><a href="#Gallary">{labels.Gallary}</a></li>
          <li><a href="#Review">{labels.Review}</a></li>
          <li><a href="#Order">{labels.Order}</a></li>
        </ul>

        <div className="icon">
          <button onClick={toggleLanguage}>
            {labels.ToggleButton}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
