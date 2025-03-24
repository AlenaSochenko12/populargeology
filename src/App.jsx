import './App.scss';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import SlickSlider from './components/Slider/Slider'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <div className="top">
        <Header />
        <Routes>
          <Route exact path="/" component={<Home />} />
        </Routes>
        <div className="top-bottom center">
          <h1 className="title">ИСТОРИЯ ЗЕМЛИ: ГЕОЛОГИЧЕСКИЙ РАКУРС</h1>
          <div className="top-bottom-text">
            <div className="top-bottom-text-sub">
              <p className="title-sub title-sub-5">
                Портал ставит своей основной целью популяризацию современных научных
                геологических знаний по истории Земли. В основе технологических
                решений - концепция динамического времени и пространства,
                позволяющая осуществлять интерактивное взаимодействие различных
                видов геологической информации как во времени, так и в пространстве.
              </p>
              <div className="btn-study">
                <a href="#wrapper" className="study">
                  Изучать историю Земли
                </a>
                <a href="#wrapper">
                  <img
                    src="img-video/arrow.svg"
                    className="study-btn"
                    alt="arrow-btn"
                  />
                </a>
              </div>
            </div>
            <div className="explosion">
              <img
                src="img-video/bigv.svg"
                alt="explosion"
                className="explosion-1"
              />
            </div>
          </div>
        </div>
        <div className="general-stripe ">
          <img
            className="general-iconics"
            src="img-video/planet.svg"
            alt="planet"
          />
          <p className="general-stripe-text">БОЛЬШОЙ ВЗРЫВ</p>
          <img
            className="general-iconics"
            src="img-video/galactic.svg"
            alt="galactic"
          />
          <p className="general-stripe-text">СОЛНЕЧНАЯ СИСТЕМА</p>
          <img
            className="general-iconics"
            src="img-video/planet.svg"
            alt="planet"
          />
          <p className="general-stripe-text">ОБРАЗОВАНИЕ ЛУНЫ</p>
          <img
            className="general-iconics"
            src="img-video/galactic.svg"
            alt="galactic"
          />
          <p className="general-stripe-text">ИСТОРИЯ ЗЕМЛИ</p>
          <img
            className="general-iconics"
            src="img-video/planet.svg"
            alt="planet"
          />
          <img
            className="general-iconics-1"
            src="img-video/planet.svg"
            alt="planet"
          />
          <p className="general-stripe-text-1">ИЗУЧАЙ НАУКУ ИНТЕРЕСНО</p>
          <img
            className="general-iconics-1"
            src="img-video/galactic.svg"
            alt="galactic"
          />
        </div>
      </div>
      <SlickSlider />
      <Footer />
    </>
  )
}

export default App