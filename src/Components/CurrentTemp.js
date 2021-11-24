import React from "react";
import styled from "styled-components";

const CurrentTemp = ({ weather }) => {
  return (
    <>
      {typeof weather.main != "undefined" ? (
        <StyledTemp>
          <div className="location">
            {weather.name}, {weather.sys.country}
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt=""
            />
          </div>
          <div className="temp">
            {Math.round(weather.main.temp)}˚ <span>F</span>
          </div>
        </StyledTemp>
      ) : (
        ""
      )}
    </>
  );
};

const StyledTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 5rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
  box-shadow: var(--boxShadow);
  border: 1px solid var(--clrLight);
  border-radius: 0.5rem;

  .location {
    font-size: 1.4rem;
  }

  .temp {
    font-size: 6rem;
    font-style: italic;
    font-family: var(--fontTitle);
  }
`;

export default CurrentTemp;
