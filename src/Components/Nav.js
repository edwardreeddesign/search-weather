import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>WEATHR</h1>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background: var(--clrAccent);
  height: 4rem;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  padding: 0 2rem;

  h1 {
    font-family: var(--fontTitle);
    color: var(--clrMed);
  }
`;

export default Nav;
