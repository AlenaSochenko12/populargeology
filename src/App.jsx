import './App.scss';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Header from './components/sections/Header/Header';
import Footer from './components/sections/Footer/Footer';
import Home from './pages/Home/Home';
import BigBang from './pages/BigBang/BigBang';
import SolarSystem from './pages/SolarSystem/SolarSystem';
import Moon from './pages/Moon/Moon';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bigbang" element={<BigBang />} />
        <Route exact path="/solarsystem" element={<SolarSystem />} />
        <Route exact path="/moon" element={<Moon />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App