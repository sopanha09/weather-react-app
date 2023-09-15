import React, { useState, useEffect } from "react";
import humidity from "../Image/humidity.png";
import weatherImages from "../IconList/weatherIcon";
import wind from "../Image/wind.png";
import '../Style/UserLocation.css'
import Forecast from "./Forecast";

const api = {
  key: "6d880005d55b4bfb3ee5c68bcd0b9806",
  base: "https://api.openweathermap.org/data/2.5/",
  forecast: "forecast",
};

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState({});
  const locationName = weather?.name;
  const [forecastData, setForecastData] = useState([]);
  const todayForecast = forecastData[0];
  const [icon, setIcon] = useState(null);

  const Humidity = todayForecast?.main?.humidity;
  const windSpeed = todayForecast?.wind?.speed;

  const iconCode = todayForecast?.weather?.[0]?.icon;
  const iconImg = weatherImages[iconCode];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
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
      `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));

    fetch(
      `${api.base}${api.forecast}?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data.list);
        console.log(data.list);
      })
      .catch((error) => console.log(error));

      fetch(
        `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setIcon(data.weather[0].icon); // Set the icon code here
          console.log(data);
      })
      .catch((error) => console.log(error));
      
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };
  return (
    <div className="App-container" >
      <div className="weatherToday">
        {!location ? (
          <p>Loading location data...</p>
        ) : (
          <div className="main-container">
            <p>{location.name}</p>
            {weather && (
              <div className="container">
                <div className="weatherImage">
                  <img src={weatherImages[icon]} alt="" />
                  <div className="humidityWind">
                    <p className="humi-wind">
                      <img src={humidity} alt="" />
                      {Humidity}%
                    </p>
                    <p className="humi-wind">
                      <img src={wind} alt="" />
                      <p>{Math.round(windSpeed)}Km/h</p>
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="weatherTitle">
              <div className="title">
                <p>Today</p>
                <h2 className="today-forcast" >{locationName}</h2>
              </div>
              <div className="weatherMain">
                {todayForecast &&
                  todayForecast.weather &&
                  todayForecast.weather[0] && (
                    <p>Temperature: {Math.round(todayForecast.main.temp)} &deg;C</p>
                  )}
                {todayForecast &&
                  todayForecast.weather &&
                  todayForecast.weather[0].main}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="main-container" >
        <Forecast />
      </div>
    </div>
  );
};

export default UserLocation;
