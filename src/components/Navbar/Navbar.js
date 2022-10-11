import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar" id="navbar">
      <span className="navbar__logo"> Mendotravel </span>
      {menuClicked ? (
        <FiMenu
          size={25}
          className="navbar__menu"
          onClick={toggleMenuClicked}
        />
      ) : (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClicked} />
      )}

      <ul
        className={
          menuClicked ? "navbar__list" : "navbar__list navbar__list--active"
        }
      >
        <li className="navbar__item">
          <Link
            activeClass="active"
            className="navbar__links"
            to="hero"
            offset={20}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Inicio{" "}
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className="navbar__links"
            to="slider"
            offset={30}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Viajes{" "}
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className="navbar__links"
            to="footer"
            offset={20}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Contacto{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
