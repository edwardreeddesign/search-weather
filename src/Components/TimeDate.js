import React from 'react';
import styled from 'styled-components';

const TimeDate = () => {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  let hour = date.getHours() % 12 || 12;
  // hour = hour % 12 || 12;
  let min = String(date.getMinutes()).padStart(2, '0');

  const amPm = hour >= 12 ? 'AM' : 'PM';

  return (
    <StyledTimeDate>
      <div className="date">
        <div className="month">
          <h4>
            {month} {day}, {year}
          </h4>
        </div>
      </div>
      <div className="time">
        {hour}:{min}
        <span> {amPm}</span>
      </div>
    </StyledTimeDate>
  );
};

const StyledTimeDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--clrAccent);
  border-radius: 0.5rem;
  box-shadow: var(--boxShadow);

  .date {
    display: flex;
    align-items: center;
    font-weight: bold;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
    font-size: 1.5rem;
  }

  .time {
    font-size: 2rem;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.8);

    span {
      font-size: 1.3rem;
    }
  }
`;

export default TimeDate;
