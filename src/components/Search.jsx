import React, { useEffect, useState } from 'react';
import UserLocation from './UserLocation';
import '../Style/Search.css'

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

    const searchPressed = () => {
        setLoading(true);
        console.log(search);
        fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setWeather(result);
                setLoading(false);
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
                <button className="submit" onClick={searchPressed}>
                    Search
                </button>
            </form>
        </div>
    )
}
