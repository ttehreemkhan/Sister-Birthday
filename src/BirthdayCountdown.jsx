import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BirthdayCountdown.css";

export default function BirthdayCountdown() {
  const [count, setCount] = useState(5);
  const [showWish, setShowWish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      setShowWish(true);
      return;
    }
    const t = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="countdown-bg">
      {!showWish && <h1 className="count">{count}</h1>}
      {showWish && (
        <div className="wish-box">
          <h1 className="title">🎉 HAPPY BIRTHDAY 🎉</h1>
          <h2 className="name">🎂 Sister 🎂</h2>
          <button className="wish-btn" onClick={() => navigate("/surprise")}>
            🎁 Open Your Surprise
          </button>
        </div>
      )}
    </div>
  );
}
