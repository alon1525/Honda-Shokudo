import React, { useContext } from 'react';
import aboutImage from '../image/Food-Plate.png';
import { LanguageContext } from "../context/LanguageContext";

function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "About Us",
      subheading: "Why Choose us?",
      paragraph: `Honda Shokudou is a Japanese restaurant with a Western twist, offering a unique menu that blends refined Japanese aesthetics with hearty Western flavors. Instead of traditional sushi or ramen, you'll find dishes like venison steak salad, creamy pasta, and rich homemade soups — all prepared with the precision and care of Japanese culinary traditions. With its warm and modern atmosphere, Honda Shokudou invites guests to enjoy a fresh take on fusion dining where East meets West in every bite.`,
    },
    ja: {
      heading: "私たちについて",
      subheading: "なぜ私たちを選ぶのか？",
      paragraph: `本田食堂は和風のひねりを加えた日本料理店で、洗練された日本の美学とボリューム満点の西洋の味覚を融合させた独自のメニューを提供しています。伝統的な寿司やラーメンの代わりに、鹿肉ステーキサラダ、クリーミーパスタ、濃厚な自家製スープなど、日本の料理伝統の正確さと丁寧さで調理された料理が楽しめます。温かくモダンな雰囲気の中で、本田食堂は東洋と西洋が一口ごとに出会う新鮮なフュージョンダイニング体験をお届けします。`,
    }
  };

  const t = content[language];

  return (
    <div className="about" id="About">
      <div className="about_main">
        <div className="image">
          <img src={aboutImage} alt="Food plate" />
        </div>

        <div className="about_text">
          <h1><span>{t.heading.split(" ")[0]}</span> {t.heading.split(" ").slice(1).join(" ")}</h1>
          <h3>{t.subheading}</h3>
          <p>{t.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
