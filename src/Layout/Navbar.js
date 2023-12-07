import { Button } from "../Reusable/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/Logo.png';
import "../Styles/Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(true);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
    <div className="header">
    <a href="/">
          <img className=' logo' src={logo} alt="Queens Lashes Logo" />
        </a>
        <h1>Unleash your inner queen...</h1>
        {button && <Button buttonStyle="btn--outline">Book Now</Button>}
    </div>
    <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {" "}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
