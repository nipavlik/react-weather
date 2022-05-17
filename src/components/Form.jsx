import React from "react";

function Form({ gettingWeather }) {
  return (
    <div className="form">
      <form onSubmit={gettingWeather}>
        <input type="text" name="city" placeholder="Город" />
        <button className="button">Искать</button>
      </form>
    </div>
  );
};

export default Form;
