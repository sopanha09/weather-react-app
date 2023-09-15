import React, { useState, useEffect } from "react";
import "../Style/Forecast.css";

const api = {
  key: "6d880005d55b4bfb3ee5c68bcd0b9806",
  base: "https://api.openweathermap.org/data/2.5/",
  forecast: "forecast",
};

export default function Forecast() {
  const [location, setLocation] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, longitude: ${longitude}`);

    fetch(
      `${api.base}${api.forecast}?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data.list);
        console.log(data.list);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="forecast-container">
      {forecastData.slice(1, 5).map((item, index) => {
        // Add a day to the current date
        const date = new Date();
        date.setDate(date.getDate() + index + 1);

        const dayName = date.toLocaleString("en-US", { weekday: "long" });

        return (
          <div className="forecast" key={index}>
            <div className="day" >
              <p>{dayName}</p>
              <img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt=""
              />
              <p className="day-temp" >{Math.round(item.main.temp)} &deg;C</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
