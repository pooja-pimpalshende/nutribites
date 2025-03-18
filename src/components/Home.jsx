import "./Home.css";
import heroImg from "../assets/img/hero.png";
import { useEffect, useState } from "react";
import Header from "./Header";

const images = import.meta.glob("../assets/img/customers/customer-*.jpg");

const CustomerGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    Promise.all(
      Object.values(images).map((importFn) =>
        importFn().then((mod) => mod.default)
      )
    ).then(setImageUrls);
  }, []);

  return (
    <div className="dilivered-imgs">
      {imageUrls.map((src, index) => (
        <img key={index} src={src} alt={`Customer ${index + 1}`} />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <>
      {<Header />}

      <main>
        <section className="section-hero">
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
              <a href="#" className="btn btn--full margin-right-sm">
                Start eating well
              </a>
              <a href="#" className="btn btn--outline">
                Learn more &darr;
              </a>
              <div className="dilivered-meals">
                <CustomerGallery />
                <p className="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <img
                src={heroImg}
                className="hero-img"
                alt="Women enjoying food, meals in storage container and food bowls on a table"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
