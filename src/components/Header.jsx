import "./Header.css";
import logoImg from "../assets/img/nutribites-logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// import logoImg from "../assets/img/omnifood-logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOnClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <>
      {/* <header className="header nav-open"> */}
      <header className={`header ${isNavOpen ? "nav-open" : ""}`}>
        <a href="#">
          <img className="logo" src={logoImg} alt="logo image" />
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <HashLink
                className="main-nav-link"
                smooth
                to="/#how-it-works"
                onClick={handleOnClick}
              >
                How it works
              </HashLink>
            </li>
            <li>
              <HashLink
                className="main-nav-link"
                smooth
                to="/#meals"
                onClick={handleOnClick}
              >
                Meals
              </HashLink>
            </li>
            <li>
              <HashLink
                className="main-nav-link"
                smooth
                to="/#testimonials"
                onClick={handleOnClick}
              >
                Testimonials
              </HashLink>
            </li>
            <li>
              <HashLink
                className="main-nav-link"
                smooth
                to="/#pricing"
                onClick={handleOnClick}
              >
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink
                className="main-nav-link nav-cta"
                smooth
                to="/#call-to-action"
                onClick={handleOnClick}
              >
                Try for free
              </HashLink>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav" onClick={handleOnClick}>
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </>
  );
};

export default Header;
