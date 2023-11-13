import React, { useState } from "react";
import Home from "./Home/Home";
import Currencies from "./Currencies/Currencies";
import Price from "./Price/Price";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

function App() {
 
  const [currencyAbbr, setCurrencyAbbr] = useState('')
  
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
        </Link>
        <h1>Bitcoin prices</h1>
        <Link onClick={() => setCurrencyAbbr('')} to="/currencies">Currencies {">"} {currencyAbbr}</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/currencies/:name" element={<Price setCurrencyAbbr={setCurrencyAbbr}/>}/>
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
