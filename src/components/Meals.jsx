import "./Meals.css";
import meal1 from "../assets/img/meals/meal-1.jpg";
import meal2 from "../assets/img/meals/meal-2.jpg";

const Meals = () => {
  return (
    <section className="section-meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3--cols">
        <div className="meal">
          <img className="meal-img" src={meal1} alt="Japanese Gyozas" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>650</strong> Calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal">
          <img className="meal-img" src={meal2} alt="Avocado Salad" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">Paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>400</strong> Calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="list">List of diets</div>
      </div>
    </section>
  );
};

export default Meals;
