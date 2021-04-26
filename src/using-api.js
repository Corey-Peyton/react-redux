import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function UsingApi() {
  const [api, setApi] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((date) => {
        setApi(date.data.statewise);
        console.log(date);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TopContainer>
      {api.map((arr) => {
        return (
          <MainDiv>
            <ItemBox>
              <State>{arr.state} :</State>
              <Number>{arr.confirmed}</Number>
            </ItemBox>
            <ViewButton
              onClick={() => history.push(`/covid-19/${arr.state}`)}
              // onClick={() =>
              //   setApi(api.filter((tempName) => tempName.state === arr.state))
              // }
            >
              View More
            </ViewButton>
          </MainDiv>
        );
      })}
    </TopContainer>
  );
}

// styled component new

const TopContainer = styled.div`
  margin: 90px 0;
`;

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 22%;
  padding: 10px;
  margin: 10px 10px 0 0;
  border: 2px dotted palevioletred;
  border-radius: 3px;
  font-size: 18px;
`;

const State = styled.div`
  margin: 0 10px 0 0;
`;

const Number = styled.div`
  margin: 0;
`;

const ViewButton = styled.button`
  color: palevioletred;
  font-size: 14px;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 20px;
`;

export default UsingApi;
