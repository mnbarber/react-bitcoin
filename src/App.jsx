import React, { useState } from "react";
import Home from "./Home/Home";
import Currencies from "./Currencies/Currencies";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Price from "./Price/Price";

function App() {
  const [currencyAbbr, setCurrencyAbbr] = useState('');
  const [price, setPrice] = useState(null);

  const handleClick = (price) => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to='/currencies'>{`Currencies > ${currencyAbbr}`}
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/currencies/:currencyName" element={<Price setCurrencyAbbr={setCurrencyAbbr} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
