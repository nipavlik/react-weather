import React, { useState } from "react";
import axios from "axios";

import Form from "./components/Form";
import Information from "./components/Information";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [country, setCountry] = useState("");
  const [pressure, setPressure] = useState(0);
  const [sunset, setSunset] = useState("");
  const [error, setError] = useState(null);

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      try {
        let res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
        );

        let celsius = Math.round(res.data.main.temp - 273);
        let sunset = res.data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);

        let sunsetDate =
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        setCity(res.data.name);
        setCountry(res.data.sys.country);
        setTemp(celsius);
        setPressure(res.data.main.pressure);
        setSunset(sunsetDate);
        setError(null);
      } catch (error) {
        setError("Ошибка получения погоды");
      }
    } else {
      setError("Введите название города");
    }
  };

  return (
    <div className="wrapper">
      <Information />
      <Form gettingWeather={getWeather} />
      <Weather
        temp={temp}
        city={city}
        country={country}
        pressure={pressure}
        sunset={sunset}
        error={error}
      />
    </div>
  );
}

export default App;
