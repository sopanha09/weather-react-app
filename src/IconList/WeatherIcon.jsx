import clearSkySun from '../Image/cloudy.png';
import clearSky from '../Image/ClearSky.png';
import cloudy from '../Image/cloudy.png';
import cloud from '../Image/cloud.png';
import brokenClouds from '../Image/brokenClouds.png';
import rainy from '../Image/rainy.png';
import rainyNight from '../Image/rainyNight.png';
import scatteredCloudsDay from '../Image/scatteredCloudsDay.png';
import scatteredCloudsNight from '../Image/scatteredCloudsNight.png';
import storm from '../Image/storm.png';
import snowflake from '../Image/snowflake.png';
import wind from '../Image/wind.png';


const WeatherImages = {
    "01d": clearSkySun,
    "01n": clearSky,
    "02d": cloudy,
    "02n": cloud,
    "03d": scatteredCloudsDay,
    "03n": scatteredCloudsNight,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": rainy,
    "09n": rainyNight,
    "10d": rainy,
    "10n": rainyNight,
    "11d": storm,
    "11n": storm,
    "13d": snowflake,
    "13n": snowflake,
    "50d": wind,
    "50n": wind,
};

export default WeatherImages;