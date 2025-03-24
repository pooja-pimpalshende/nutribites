import "./App.css";
import FeaturedIn from "./components/FeaturedIn";
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
    </>
  );
}

export default App;
