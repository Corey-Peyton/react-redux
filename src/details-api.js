import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function DatailApi() {
  const params = useParams();

  return (
    <TopContainer>
      <h1>{params.state}</h1>
    </TopContainer>
  );
}

// styled component new

const TopContainer = styled.div`
  margin: 90px 0;
`;

export default DatailApi;
