import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sessions from "./Pages/Sessions/Sessions";
import Seats from "./Pages/Seats/Seats";
import Receipt from "./Pages/Receipt/Receipt";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions/:idMovie" element={<Sessions />} />
        <Route path="/seats/:idSession" element={<Seats />} />
        <Route path="/success" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
}
