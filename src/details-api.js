import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";

function DatailApi() {
  const params = useParams();
  const history = useHistory();
  const currentState = params.state;

  return (
    <TopContainer>
      <Backbutton onClick={() => history.goBack()}>Back</Backbutton>
      <h1>{currentState}</h1>
    </TopContainer>
  );
}

// styled component new

const TopContainer = styled.div`
  margin: 90px 0;
`;

const Backbutton = styled.button`
  color: palevioletred;
  cursor: pointer;
  font-size: 13px;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 10px;
`;

export default DatailApi;
