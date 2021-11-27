import React from "react";
import styled from "styled-components";

const ExtraWeather = ({ weather }) => {
  return (
    <StyledExtra>
      <>
        <div className="currentConditions">
          <div className="name">Feels Like</div>
          <div className="value">
            {Math.round(weather.main.feels_like)}˚ <span>F</span>
          </div>
        </div>
        <div className="currentConditions">
          <div className="name">High</div>
          <div className="value">
            {Math.round(weather.main.temp_max)}˚ <span>F</span>
          </div>
        </div>
        <div className="currentConditions">
          <div className="name">Low</div>
          <div className="value">
            {Math.round(weather.main.temp_min)}˚ <span>F</span>
          </div>
        </div>
        <div className="currentConditions">
          <div className="name">Humidity</div>
          <div className="value">{weather.main.humidity} %</div>
        </div>
      </>
    </StyledExtra>
  );
};

const StyledExtra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
  max-width: 30rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--clrAccent);
  border-radius: 0.5rem;
  box-shadow: var(--boxShadow);
  padding: 2rem;

  .currentConditions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export default ExtraWeather;
