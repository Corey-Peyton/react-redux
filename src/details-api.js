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
        // console.log(date.data.statewise);
      })
      .catch((err) => console.log(err));
  }, []);

  const StateDatail = api.filter((tempName) => tempName.state === currentState);
  console.log(StateDatail[0]);

  return (
    <TopContainer>
      <Backbutton onClick={() => history.goBack()}>Back</Backbutton>

      {StateDatail?.map((datails, i) => {
        return (
          <ItemBox key={i}>
            <State>{datails?.state}</State>
            <Datails>{`Active cases: ${datails?.active}`}</Datails>
            <Datails>{`Recovered: ${datails?.recovered}`}</Datails>
            <Datails>{`Deaths: ${datails?.deaths}`}</Datails>
            <Datails>{`Last Updated Time: ${datails?.lastupdatedtime}`}</Datails>
          </ItemBox>
        );
      })}
    </TopContainer>
  );
}

// styled component

const TopContainer = styled.div`
  margin: 90px 0;
`;

const State = styled.h3`
  font-size: 30px;
  margin: 5px 0 15px 0;
  border-bottom: 1px solid palevioletred;
`;

const Datails = styled.h2`
  font-size: 23px;
  margin: 10px 0;
`;

const Backbutton = styled.button`
  color: palevioletred;
  cursor: pointer;
  font-size: 13px;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 10px;
`;

const ItemBox = styled.div`
  width: 30%;
  padding: 5px;
  margin: 20px 10px 0 0;
  border: 2px dotted palevioletred;
  border-radius: 3px;
  font-size: 18px;
`;

export default DatailApi;
