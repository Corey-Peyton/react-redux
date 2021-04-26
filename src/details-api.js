import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function DatailApi() {
  const [api, setApi] = useState([]);

  const params = useParams();
  const history = useHistory();
  const currentState = params.state;

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((date) => {
        setApi(date.data.statewise);
        console.log(date.data.statewise);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TopContainer>
      <Backbutton onClick={() => history.goBack()}>Back</Backbutton>
      <h1>{currentState}</h1>
      {/* {api.map((arr) => {
        return <h3>{arr.confirmed}</h3>;
      })} */}
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
