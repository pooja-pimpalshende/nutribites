import "./Header.css";
import logoImg from "../assets/img/nutribites-logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
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
              <a className="main-nav-link" href="#">
                How it works
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Meals
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#">
                Try for free
              </a>
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
