import React, { useState } from 'react';

const api = {
    key: "6d880005d55b4bfb3ee5c68bcd0b9806",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  

export const Weather = () => {
const [search, setSearch] = useState("");
const [weather, setWeather] = useState({})
const [loading, setLoading] = useState(false);
    
const searchPressed = () => {
    setLoading(true);
    console.log(search);
    fetch(`${api.base}weather?q=${search}&APPID=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
        setLoading(false)
      });
};

return (
<div>
    <form>
        <input 
        type='text'
        placeholder='Search for city...'
        onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchPressed}>Search</button>
    </form>
</div>
)
}
