import React from "react";
import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContacts } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [color, setColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <header className={color ? "header header-bg" : "header"}>
      {/* <nav className="nav"> */}
      <Link
        activeClass="active"
        to=""
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="nav__logo"
      >
        Logo
      </Link>
      <div className="nav__menu">
        <ul className="nav__list">
          <IconContext.Provider value={{ className: "icons" }}>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
                className="nav__link"
              >
                <BiHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="catalog"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
                className="nav__link"
              >
                <MdProductionQuantityLimits />
                <span>Catalog</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav__link"
              >
                <SiAboutdotme />
                <span>About us</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav__link"
              >
                <IoMdContacts />
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav__item">
              <button className="btn-nav">Help now</button>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
      {/* </nav> */}
    </header>
  );
};

export default Header;
