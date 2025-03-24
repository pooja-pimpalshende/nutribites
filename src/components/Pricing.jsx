import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2--cols">
        <div className="pricing-paln pricing-paln--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. Thant's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Order between 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn--full ">
              Start eating well
            </a>
          </div>
        </div>

        <div className="pricing-paln pricing-paln--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. Thant's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
