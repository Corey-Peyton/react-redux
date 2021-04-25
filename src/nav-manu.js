import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Manu = () => {
  let history = useHistory();
  return (
    <MainCont>
      <NavButton onClick={() => history.push("/")}>Redux Todo</NavButton>
      <NavButton onClick={() => history.push("/normal-todo")}>
        Norml Todo
      </NavButton>
      <NavButton onClick={() => history.push("/Covid-19")}>Covied 19</NavButton>
    </MainCont>
  );
};

const MainCont = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    palevioletred
  );
  color: palevioletred;
  font-size: 1em;
  padding: 0.8em;
  margin: 0 0 30px;
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
