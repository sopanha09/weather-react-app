# Weather App Naming Convention

## Style

### Color

- Primary Color : `#07beb8`
- Secondary Color : `#3dccc7`
- Third Color : `rgba(255, 255, 255, 0.483)`
- Fourth Color : `#ffff`

<br>

### Screen display

- Mobile screen : `375px`
- Desktop screen : `1440px`

<br>
### Typography

- Font family : [`'Source Code Pro', Poppins`](https://fonts.google.com/specimen/Roboto?query=roboto)

## Icon

- [`weather-icon`] : (https://www.flaticon.com/search?word=weather%20icon) 


## Folder Structure

```bash
    weather-app/
	|-- doc
	| |-- convention.md
	|-- node_modules/
    | |
	|-- public/
	|  | -- index.html
    |  | -- mainifest.json
    |  | -- robots.txt
	|-- src/
	|   |-- components/
	|   |   |-- Forecast.jsx
	|   |   |-- Search.jsx
    |   |   |-- UserLocation.jsx
    |   |   |-- Weather.jsx
	|-- |-- IconList
    |   |   |-- WeatherIcon.jsx
	|-- |-- Image/
    |-- |--
    |-- |-- Style
    |-- |   |-- Forecast.css
    |-- |   |-- Search.css
    |-- |   |-- UserLocation.css
    |-- |-- App.css
    |-- |-- App.jsx
    |-- |-- App.test.js
    |-- |-- index.js
	|-- .gitignore
	|-- package-lock.json
	|-- packkage.json
    |-- README.md
```

- `build` : Contains static css and js
- `doc` : Contains project's documentation `convention.md`
- `public` : Contains static : index.html, manifest.json and robots.txt
- `src` : Contains the main source code for your application. It contains component `main.js` and `main.css`


## React code conventions

### Naming convention


- `Components` : Use descriptive and meaningful names for React components. Use PascalCase(capitalizing the first letter of each word) for component names.

- `Files` : Name your files using PascalCase, matching the component name. For example, if you have a component named UserCard, the file should be named UserCard.js.

### Building a weather app in ReactJS

- `Set up the project`: Start by creating a new React application using Create React App.
- `Styling`: Choose a styling write by CSS.
- `Retrieving weather data`: To fetch weather data, you will need to make API calls to a weather service provider like OpenWeatherMap or WeatherBit. You can use the fetch function in JavaScript to send a GET request to the weather API and retrieve the weather information as JSON. Here's an example of a function that retrieves weather data using the OpenWeatherMap API:

Declare api outside function :

```javascript
const api = {
  key: "6d880005d55b4bfb3ee5c68bcd0b9806",
  base: "https://api.openweathermap.org/data/2.5/",
  forecast: "forecast",
};
```
Fetch lat and lon from the api

```javascript
fetch(
      `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
```

- `Displaying weather data`: Once you have retrieved the weather data, you can display it in your app. You can create components to render different parts of the weather information, such as the current temperature, weather conditions, and forecast. 
- `Search functionality`: Implement a search feature that allows users to search for weather conditions in different locations. You can create a component that includes an input field and a button. When the user clicks the button, you can fetch the weather data for the specified location and update the UI with the new data.
- `Error handling`: Handle errors that may occur during the API call or data retrieval process. You can check the status of the API response and display an appropriate error message if the request fails.


# Git / Github Convention

## Git Commit Messages

A good commit message should be:
- `Descriptive`: Explain what changes were made and why they were made.
- `Concise`: Keep the message short and to the point.
- `Capitalized`: Start the message with a capital letter.
- `End with a period`: Finish the message with a period.

## Branch Naming Convention

A simplified branch naming convention can be:
- `<category>`: The type of branch, such as feature, bugfix, hotfix, or test.
- `<reference>`: The reference of the issue/ticket you are working on, or no-ref if there is no reference.
- `<description>`: A short description of the branch's purpose, using kebab-case.

## Git Branch Strategy

- Git Branch Strategy Convention
- Use the Git Flow branching strategy for managing code changes.
- Create branches with clear names that reflect the purpose of the work.
- Common branch types:
  - `main`: Represents the production-ready codebase.
  - `develop`: Integration branch for ongoing development.
  - `feature/<feature-name>`: For developing new features.
  - `bugfix/<bug-description>`: For fixing bugs.
  - `hotfix/<issue-description>`: For critical fixes in production.
  - `release/<version>`: Preparing a release version.

## Use Semantic Versioning (SemVer) Tag

- Follow Semantic Versioning guidelines for version numbering.
- Versions are of the form `MAJOR.MINOR.PATCH`.
- Increment the version as follows:
  - `MAJOR`: Significant changes, breaking backward compatibility.
  - `MINOR`: New features, backward-compatible.
  - `PATCH`: Bug fixes, backward-compatible.
  - Example: `1.0.0` -> `1.1.0` -> `1.1.1`