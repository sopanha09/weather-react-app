import React, { useState } from "react";
import UserLocation from "./UserLocation";
import { Search } from "./Search";

export const Weather = ({ searchPressed }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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
          <button className="submit" onClick={searchPressed}>
            Search
          </button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="weather">{search === "" && <UserLocation />}</div>
        )}
      </div>
    </div>
  );
};
