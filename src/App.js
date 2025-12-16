import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayCountdown from "./BirthdayCountdown";
import SurprisePage from "./SurprisePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BirthdayCountdown />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </BrowserRouter>
  );
}
