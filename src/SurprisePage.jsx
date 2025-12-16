import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SurprisePage.css";

const gifts = [
  "💌 Wishing you endless happiness!",
  "🌸 May your smile never fade!",
  "✨ You are special & loved!",
  "🎉 Best year ahead!",
  "💖 Lots of love & duas!",
];

export default function SurprisePage() {
  const [opened, setOpened] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="surprise-bg">
      <h1 className="surprise-title">🎁 Your Birthday Surprises 🎁</h1>
      <div className="gifts">
        {gifts.map((wish, i) => (
          <div
            key={i}
            className={`gift-box ${opened === i ? "open" : ""}`}
            onClick={() => setOpened(i)}
          >
            <div className="lid"></div>
            <div className="box"></div>
            {opened === i && <p className="wish-text">{wish}</p>}
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>🔙 Back</button>
    </div>
  );
}
