import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Input from "./Components/Input";
import GlobalStyle from "./Styles/GlobalStyles";
import TimeDate from "./Components/TimeDate";
import CurrentConditions from "./Components/CurrentConditions";
import Spinner from "./Components/Spinner";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE,
  };

  const search = async (evt) => {
    setError(null);
    if (evt.key === "Enter") {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`
        );
        if (!response.ok) {
          throw new Error("Couldn't find City.");
        }
        const result = await response.json();
        console.log(result);

        setWeather(result);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }

      if (error) {
        return <p>{error}</p>;
      }

      if (isLoading) {
        <Spinner />;
      }
    }
  };

  const inputHandler = (e, error) => {
    setQuery(e.target.value);
  };

  const weatherBgClass =
    typeof weather.main != "undefined"
      ? weather.main.temp < 50 &&
        weather.weather[0].main !== "Rain" &&
        weather.weather[0].main !== "Clouds" &&
        weather.weather[0].main !== "Snow"
        ? "App cold"
        : weather.main.temp < 50 && weather.weather[0].main === "Rain"
        ? "App rain"
        : weather.main.temp < 50 && weather.weather[0].main === "Clouds"
        ? "App clouds"
        : weather.weather[0].main === "Snow"
        ? "App snow"
        : "App"
      : "App";

  return (
    <div className={weatherBgClass}>
      <StyledApp>
        <GlobalStyle />
        <Nav />
        {typeof weather.main != "undefined"}
        <Input
          api={api}
          search={search}
          inputHandler={inputHandler}
          query={query}
          setQuery={setQuery}
          setWeather={setWeather}
        />
        {isLoading && <Spinner />}
        <TimeDate />
        {error && <p className="error">Couldn't find City</p>}
        {typeof weather.main != "undefined" ? (
          <CurrentConditions weather={weather} />
        ) : (
          ""
        )}
      </StyledApp>
    </div>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.6)
  );

  .error {
    text-align: center;
    font-size: 2rem;
  }
`;

export default App;
