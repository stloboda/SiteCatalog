import React from "react";
import "./App.css";
import CatalogCard from "./Components/CatalogCard";
import CardItem from "./Components/CardItem";
import TitlePage from "./Components/TitlePage";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import Footer from "./Components/Footer";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="home">
        <Header />
        <TitlePage />
        <Routes>
          <Route path="/" element={<CatalogCard />} />
          <Route path="catalog/:id" element={<CardItem />} />
        </Routes>
        <AboutPage />
        <ContactPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
