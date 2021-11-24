import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Input from "./Components/Input";
import GlobalStyle from "./Styles/GlobalStyles";
import TimeDate from "./Components/TimeDate";
import CurrentConditions from "./Components/CurrentConditions";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // const api = {
  //   key: process.env.REACT_APP_API_KEY,
  //   base: process.env.REACT_APP_API_BASE,
  // };

  const api = {
    key: "f77fe606824494b5fb994bb17a72f10d",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  const weatherClass =
    typeof weather.main != "undefined"
      ? weather.main.temp < 50
        ? "App cold"
        : "App"
      : "App";

  return (
    <div className={weatherClass}>
      <StyledApp>
        <GlobalStyle />
        <Nav />
        <Input
          api={api}
          search={search}
          inputHandler={inputHandler}
          query={query}
          setQuery={setQuery}
          setWeather={setWeather}
        />
        <TimeDate />
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
`;

export default App;
