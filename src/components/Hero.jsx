import "./Hero.css";
import heroImg from "../assets/img/hero.png";
import heroImgWebp from "../assets/img/hero.webp";
import ImageGallery from "../utils/ImageGallery";
import { HashLink } from "react-router-hash-link";

const images = import.meta.glob("../assets/img/customers/customer-*.jpg");

const Hero = ({ heroRef }) => {
  return (
    <>
      <section ref={heroRef} className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <HashLink
              smooth
              to="/#call-to-action"
              className="btn btn--full margin-right-sm"
            >
              Start eating well
            </HashLink>
            <HashLink smooth to="/#how-it-works" className="btn btn--outline">
              Learn more &darr;
            </HashLink>
            <div className="dilivered-meals">
              <ImageGallery images={images} className="dilivered-imgs" />

              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcSet={heroImgWebp} type="image/webp" />
              <source srcSet={heroImg} type="image/png" />
              <img
                src={heroImg}
                className="hero-img"
                alt="Women enjoying food, meals in storage container and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
