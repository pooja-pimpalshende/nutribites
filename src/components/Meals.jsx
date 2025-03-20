import "./Meals.css";
import meal1 from "../assets/img/meals/meal-1.jpg";
// import meal2 from "../assets/img/meals/meal-2.jpg";

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
          <span className="tag">Vegetarian</span>
          <p className="meal-title">Japanese Gyozas</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <ion-icon name="flame-outline"></ion-icon>
              <span>650 Calories</span>
            </li>
            <li className="meal-attribute">
              <ion-icon name="restaurant-outline"></ion-icon>
              <span>NutriScore &reg; 74</span>
            </li>
            <li className="meal-attribute">
              <ion-icon name="star-outline"></ion-icon>
              <span>4.9 rating (537)</span>
            </li>
          </ul>
        </div>
        <div className="meal">Melas</div>
        <div className="list">List of diets</div>
      </div>
    </section>
  );
};

export default Meals;
