import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CallToAction from "./components/CallToAction";
import FeaturedIn from "./components/FeaturedIn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Meals from "./components/Meals";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const curElVal = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-70px",
      }
    );
    if (curElVal) observer.observe(curElVal);

    return () => {
      if (curElVal) {
        observer.unobserve(curElVal);
      }
    };
  }, []);

  return (
    <div className={`${isSticky ? "sticky" : ""}`}>
      <Router>
        <Header />
        <Hero heroRef={heroRef} />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
