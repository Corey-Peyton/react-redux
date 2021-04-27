import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function UserDetail() {
  const history = useHistory();
  const { id } = useParams();
  const { user = [] } = useSelector((state) => state.userReduscer);

  const curruntuser = user.filter((temp) => temp.Id === id);
  console.log(curruntuser);
  return (
    <TopContainer>
      <Backbutton onClick={() => history.goBack()}>Back</Backbutton>
      {curruntuser.map((user, i) => {
        return (
          <ItemBox key={i}>
            <Datails>{`User Id: ${user?.Id}`}</Datails>
            <Datails>{`User Name: ${user?.Name}`}</Datails>
            <Datails>{`User Age: ${user?.Age}`}</Datails>
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

const Datails = styled.h2`
  font-size: 22px;
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
  width: 35%;
  padding: 5px;
  margin: 20px 10px 0 0;
  border: 2px dotted palevioletred;
  border-radius: 3px;
  font-size: 18px;
`;

export default UserDetail;
