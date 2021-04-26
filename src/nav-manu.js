import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

const Manu = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(location.pathname);

  return (
    <MainCont>
      <NavButton
        className={location.pathname === "/" ? "activebtn" : ""}
        onClick={() => history.push("/")}
      >
        Redux Todo
      </NavButton>
      <NavButton onClick={() => history.push("/normal-todo")}>
        Norml Todo
      </NavButton>
      <NavButton onClick={() => history.push("/covid-19")}>Covied 19</NavButton>
    </MainCont>
  );
};

const MainCont = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    palevioletred
  );
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  color: palevioletred;
  font-size: 1em;
  padding: 0.8em;
  border-bottom: 1px solid palevioletred;
`;

const NavButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 5px 10px;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

export default Manu;
