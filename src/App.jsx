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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
