import React from "react";
import { BiHome } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContacts } from "react-icons/io";
import { IconContext } from "react-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="nav__logo">
          Logo
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <IconContext.Provider value={{ className: "icons" }}>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <BiHome />
                  <span>Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="/catalog" className="nav__link">
                  <MdProductionQuantityLimits />
                  <span>Catalog</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <SiAboutdotme />
                  <span>About us</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <IoMdContacts />
                  <span>Contact</span>
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
