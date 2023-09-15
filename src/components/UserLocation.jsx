import React, { useState, useEffect } from "react";
import humidity from "../Image/humidity.png";
import weatherImages from "../IconList/weatherIcon";
import wind from "../Image/wind.png";
import cloudy from "../Image/cloudy.png";
import "./UserLocation.css";

const api = {
  key: "6d880005d55b4bfb3ee5c68bcd0b9806",
  base: "https://api.openweathermap.org/data/2.5/",
};

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState({});

  const iconData = "03d";
  const iconImg = weatherImages[iconData];

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
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };
  return (
    <div className="weatherToday">
      {!location ? (
        <p>Loading location data...</p>
      ) : (
        <div className="main-container">
          <p>{location.name}</p>
          {weather && (
            <div className="container">
              <div className="weatherImage">
                <img src={iconImg} alt="" />
                <div className="humidityWind">
                  <p className="humi-wind" >
                    <img src={humidity} alt="" />
                    {weather.main && weather.main.humidity && (
                      <p>{weather.main.humidity}%</p>
                    )}
                  </p>
                  <p className="humi-wind">
                    <img src={wind} alt="" />
                    {weather.wind && weather.wind.speed && (
                      <p>{weather.wind.speed}Km/h</p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="weatherTitle">
            <div className="title">
              <p>Today</p>
              <p>{weather.name}</p>
            </div>
            <div className="weatherMain">
              {weather.main && weather.main.temp && (
                <p>Feels like: {weather.main.temp} °C</p>
              )}
              {weather.main && weather.main.temp && (
                <p>{weather.weather[0].main}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLocation;
