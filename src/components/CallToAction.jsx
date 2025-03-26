import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="section-cta">
      <div className="container  ">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="cta-form" action="#">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you here from us?
                </label>
                <select id="select-where" required>
                  <option value="">Please select one option:</option>
                  <option value="facebook">Facebook</option>
                  <option value="youtube">Youtude</option>
                  <option value="podcast">Podcast</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-imag-box"
            role="img"
            aria-label="Women enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
