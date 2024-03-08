import React, { useState } from "react";
import Home from "./Home/Home";
import Currencies from "./Currencies/Currencies";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [price, setPrice] = useState(null);

  const handleClick = (price) => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
        <a href='/currencies'>Currencies</a>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
