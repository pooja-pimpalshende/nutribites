import "./Testimonials.css";
import img1 from "../assets/img/customers/dave.jpg";
import img2 from "../assets/img/customers/ben.jpg";
import img4 from "../assets/img/customers/hannah.jpg";
import img3 from "../assets/img/customers/steve.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials grid grid--2--cols">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back!
        </h2>

        <div className="testimonials ">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={img1}
              alt="Photo of customer Dave Bryson"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={img2}
              alt="Photo of customer Ben Hadley"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={img3}
              alt="Photo of customer Steve Miller"
            />
            <blockquote className="testimonial-text">
              Nutribites is a life saver! I just started a company, so there's
              no time for cooking. I couldn't live without my daily meals now!
              ()
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={img4}
              alt="Photo of customer Hannah Smith"
            />
            <blockquote className="testimonial-text">
              I got Nutribites for the whole family, and it frees up so much
              time! Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">Gallery</div>
    </section>
  );
};

export default Testimonials;
