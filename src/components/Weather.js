import React, {useEffect, useState} from "react";
import UserLocation from "./UserLocation";
import {Search} from "./Search";
import {api} from "./UserLocation";
import {updateLatLong} from "./UserLocation";

export const Weather = ({searchPressed}) => {
    const [search, setSearch] = useState("");
    const [listCity, setListCity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search === "") {
                setListCity([])
            } else {
                console.log(`doSearch ${search}`);
                setSearch(search);
                fetch(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${api.key}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        setListCity(data)
                        console.log(data[0]['name']);
                        console.log(listCity)
                    })
                    .catch((error) => setListCity([]));
            }
            // Send Axios request here
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [search])

    // }

    function searchCity(lat, long)  {
        setLat(lat);
        setLong(long)
        setSearch("")
        setListCity([])
    }

    return (
        <div className="Weather">
            <div className="container">
                <form className="search">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search for city..."
                        onChange={event => setSearch(event.target.value)}
                    />
                    {/*<button className="submit" onClick={searchCity}>*/}
                    {/*    Search*/}
                    {/*</button>*/}
                </form>
                {
                    listCity && listCity?.map((city) => (
                        <button
                            onClick={()=>searchCity(city['lat'], city['lon'])}>{city['name']}</button>
                    ))
                }
                {loading ? (
                    <p>Loading...</p>
                ) : (

                    <div className="weather">{search === "" && <UserLocation lat={lat} long={long} />}</div>
                )}
            </div>

        </div>
    );
};
