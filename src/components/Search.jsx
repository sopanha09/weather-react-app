import React, { useEffect, useState } from 'react';
import '../Style/Search.css';



const api = {
    key: "6d880005d55b4bfb3ee5c68bcd0b9806",
    base: "https://api.openweathermap.org/data/2.5/",
};

export const Search = () => {
    const [search, setSearch] = useState("");
    const [weatherData, setWeatherData] = useState("");
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = () => {
        fetch(
            `${api.base}weather?q=${search}&appid=${api.key}`
        )
            .then((res) => res.json())
            .then((data) => {
                setWeatherData(data);
            });
    };


    return (
        <div>
            <form className='search' >
                <input
                className="input"
                type = "text"
                placeholder='Search for city...'
                onChange={(e) => setSearch(e.target.value)} />
            </form>
        </div>
    )
}
