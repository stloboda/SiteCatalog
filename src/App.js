import React from "react";
import "./App.css";
import CatalogCard from "./Components/CatalogCard";
import Header from "./Components/Header";
import CardItem from "./Components/CardItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="home">
        <Header />
        <Routes>
          <Route path="/" element={<CatalogCard />} />
          <Route path="catalog/:id" element={<CardItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
