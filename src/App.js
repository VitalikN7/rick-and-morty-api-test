// pages
import { Home } from "./pages/Home/Home";
import { Card } from "./pages/Card/Card";
// router
import { Routes, Route } from "react-router-dom";
// models
import { Header } from "./models/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
