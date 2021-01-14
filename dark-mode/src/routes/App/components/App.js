import React, { useState, useEffect } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { StyledIconMoon, StyledIconSun } from "./partials/Icons.js";
import '../styles/_app.scss';

const Field = ({ placeholder }) => (
  <div className="field">
    <div className="control">
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  </div>
);

const Column = ({ children }) => (
  <div className="column">
    <p>{children}</p>
  </div>
);

const storedDarkModeState =
  localStorage.getItem("isDarkMode") &&
  JSON.parse(localStorage.getItem("isDarkMode"));

function App() {
  const [isDarkMode, setDarkMode] = useState(storedDarkModeState || false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  });

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
    document.documentElement.classList.add("with-transitions");
  };

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button
          className="app__dark-mode-btn icon level-right"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <StyledIconMoon icon={faMoon} />
          ) : (
            <StyledIconSun icon={faSun} />
          )}
        </button>
      </div>

      <div className="columns">
        <Column>
          Lollipop powder powder. Cotton candy caramels chupa chups halvah
          muffin caramels apple pie topping cake. Topping chocolate bar pastry
          chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum.
          Chocolate bar lollipop candy canes. Biscuit croissant apple pie
          pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu
          chocolate bar carrot cake lemon drops halvah.
        </Column>
        <Column>
          Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart.
          Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan
          toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding
          sugar plum chocolate cake cake biscuit pastry pastry chocolate bar
          tart. Lemon drops dessert gummies icing.
        </Column>
      </div>

      <Field placeholder="Name" />
      <Field placeholder="Email" />

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
