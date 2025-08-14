import React, { useState } from "react";
import "./Navbar.css"; // On met le CSS à part

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={isResponsive ? "topnav responsive" : "topnav"}>
        <div className="logo">
                <img src="/logo.png" className="" alt="logo" />
                <h1>MovieScope</h1>
            </div>
      <a href="/" className="active">
        Home
      </a>
      <a href="/Liste">Movies</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#" className="icon" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
