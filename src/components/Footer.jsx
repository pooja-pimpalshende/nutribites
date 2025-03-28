import "./Footer.css";
import logoImg from "../assets/img/nutribites-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container grid grid--5--cols grid--footer ">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo footer--logo" src={logoImg} alt="logo image" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon"
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon"
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon"
                  name="logo-twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright">
            &copy; {currentYear} by Nutribites, Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              Harrison St. Gate 4, 2nd Floor, Oslo, 0066
            </p>
            <p>
              <a className="footer-link" href="tel:47-401-6370">
                47-401-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@nutribites.com">
                hello@nutribites.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
