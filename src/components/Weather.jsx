import React, { useState } from "react";
import weatherImages from "../IconList/weatherIcon";
import humidity from "../Image/humidity.png";
import wind from "../Image/wind.png";
import UserLocation from "./UserLocation";

export const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const iconData = "03d";
  const iconImg = weatherImages[iconData];

  return (
    <div className="Weather">
      <div className="container">
        <form className="search">
          <input
            className="input"
            type="text"
            placeholder="Search for city..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="submit">Search</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="weather">
            <UserLocation />
          </div>
        )}
      </div>
    </div>
  );
};
