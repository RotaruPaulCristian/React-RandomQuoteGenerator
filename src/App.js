// Importing useState from react
import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    const slipID = Math.floor(Math.random() * 100) + 1;
    const adviceAPI = `https://api.adviceslip.com/advice/${slipID}`;

    // Fetch a random advice slip
    fetch(adviceAPI)
      .then((response) => response.json())
      .then((data) => {
        // destructuring the advice from data
        const { advice } = data.slip;

        // update to new advice we just fetched
        setAdvice(advice);
      });
  };

  useEffect(() => fetchAdvice(), []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        {/* Trigger fetchAdvice on button click */}
        <button className="button" onClick={() => fetchAdvice()}>
          <span>give me advice!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
