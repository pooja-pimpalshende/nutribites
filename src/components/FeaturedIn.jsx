import "./FeaturedIn.css";
import ImageGallery from "../utils/ImageGallery";

const images = import.meta.glob("../assets/img/logos/*");

const FeaturedIn = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As fetured in</h2>
        <ImageGallery images={images} className="logos" />
      </div>
    </section>
  );
};

export default FeaturedIn;
