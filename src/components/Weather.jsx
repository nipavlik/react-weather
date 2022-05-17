import React from "react";

function Weather({ city, country, temp, pressure, error }) {
  return (
    <div className="info-list">
      {city && (
        <div className="info">
          <p>Местоположение: {city}, {country}</p>
          <p>Температура: {temp} &#176;C</p>
          <p>Давление: {pressure}</p>
        </div>
      )}
      <p>{error}</p>
    </div>
  );
}

export default Weather;
