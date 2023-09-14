import React, { useState } from "react";
import weatherImages from "../IconList/weatherIcon";
import humidity from "../Image/humidity.png";
import wind from "../Image/wind.png";


export const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const iconData = "03d";
  const iconImg = weatherImages[iconData];

  

  return (
  <div className="Weather" >
    <div className="container">
      <form className="search" > 
        <input
          className="input"
          type="text"
          placeholder="Search for city..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="submit" >Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="weatherToday">
          <div className="weatherImage">
            <img src={iconImg} alt="" />
            <div className="humidity-wind" >
            <div className="humidityWind" >
              <p><img src={humidity} alt=""/>Humidity</p>
              <p><img src={wind} alt="" /> Wind</p>
            </div>
            </div>
          </div>
          <div>
            <div className="title" >
            <h3>Today</h3>
            <h2>Phnom Penh</h2>
            </div>
            <div className="weatherMain">
            <h5>Feels like: 28 &deg;C</h5>
            <h5>Clear Sky</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};
