import React from "react";
import styled from "styled-components";

const Input = ({ api, query, setQuery, setWeather, search, inputHandler }) => {
  return (
    <StyledInput>
      <input
        type="text"
        placeholder="Search..."
        onChange={inputHandler}
        value={query}
        onKeyPress={search}
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 75%;
  margin: 0 auto 1.5rem;

  input {
    display: block;
    width: 100%;
    padding: 1.2rem;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 0.5rem 0.5rem 1.5rem 1.5rem;
    border-bottom: 3px solid var(--clrDark);
    color: var(--clrDark);
    font-size: 1.7rem;
    transition: background 400ms ease-in-out;

    &:focus {
      background-color: rgba(255, 255, 255, 0.9);
    }
    &::placeholder {
      color: var(--clrDark);
    }
  }
`;

export default Input;
