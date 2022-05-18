import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sessoes from "./Pages/Sessions/Sessions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions/:idMovie" element={<Sessoes />} />
      </Routes>
    </BrowserRouter>
  );
}
