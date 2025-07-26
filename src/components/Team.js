import React, { useContext } from "react";
import chef1 from "../image/chef1.png";
import chef2 from "../image/chef2.png";
import { LanguageContext } from "../context/LanguageContext";

function Team() {
  const { language } = useContext(LanguageContext);

  const teamMembers = {
    en: [
      {
        id: 1,
        name: "Honda",
        image: chef1,
        bio: "Owner & head chef with a passion for fusion cuisine.",
      },
      {
        id: 2,
        name: "Chikako",
        image: chef2,
        bio: "Friendly and attentive waitress, ensuring a warm dining experience.",
      },
    ],
    jp: [
      {
        id: 1,
        name: "本田",
        image: chef1,
        bio: "オーナー兼料理長。和洋折衷の料理を得意とする。",
      },
      {
        id: 2,
        name: "ちかこ",
        image: chef2,
        bio: "親切で丁寧な接客を心がけるウェイトレス。",
      },
    ],
  };

  return (
    <div className="team" id="Team">
      <h1>
        {language === "ja" ? <>私たちの<span>チーム</span></> : <>Our<span>Team</span></>}
      </h1>

      <div className="team_box">
        {teamMembers[language === "jp" ? "jp" : "en"].map((member) => (
          <div className="profile" key={member.id}>
            <img src={member.image} alt={member.name} />
            <div className="info">
              <h2 className="name">{member.name}</h2>
              <p className="bio">{member.bio}</p>
              <div className="team_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
