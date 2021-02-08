import React from "react";
import {
  Link
} from "react-router-dom";
import styled from "styled-components"

const NavBar = styled.div`      
    background-color: white;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

const NavItem = styled.div`
  height: 27px;
  width: 20px;
  padding: 40px;
  font-size: 20px;
  color: white;
  padding-bottom: 20px;
`


export const Nav: React.FunctionComponent = () => (
  <>
  <NavBar>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/results">Results</Link>
      </NavItem>
  </NavBar>
  </>
)