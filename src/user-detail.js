import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateuser } from "./action";

function UserDetail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { user = [] } = useSelector((state) => state.userReduscer);

  const curruntuser = user.filter((temp) => temp.Id === id);
  console.log(curruntuser);
  const [inputva, setInputValue] = useState(curruntuser[0].Name);

  const edituser = () => {
    dispatch(updateuser({ id: curruntuser[0].Id, data: inputva }));
    history.push("/basic-redux");
  };
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
      <p>Edite Name</p>
      <p>{inputva}</p>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputva}
      />
      <UpdateButton onClick={edituser}>Edit</UpdateButton>
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

const UpdateButton = styled.button`
  color: palevioletred;
  cursor: pointer;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 10px;
  border: 1px solid palevioletred;
  border-radius: 3px;
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
