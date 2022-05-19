import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sessions from "./Pages/Sessions/Sessions";
import Seats from "./Pages/Seats/Seats";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions/:idMovie" element={<Sessions />} />
        <Route path="/seats/:idSession" element={<Seats />} />
      </Routes>
    </BrowserRouter>
  );
}
