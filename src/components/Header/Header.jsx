import './Header.scss'
import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <header className="header center">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <Link to="/" className="logo">GeoPortal.</Link>
          <nav className="menu-1">
            <Link to="/" className="menu">Главная</Link>
            <a href="#wrapper" className="menu">История Земли</a>
            <Link to="/about" className="menu">О проекте</Link>
            <Link to="/rightowner" className="menu">Источники</Link>
          </nav>
        </header>
        <div className="line" />
    </>
  )
}

export default Header