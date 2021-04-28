import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, log, storename, removename } from "./action";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

function BasicRedux() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [num, setnum] = useState();
  const [name, setName] = useState("");

  const countreducer = useSelector((state) => state.countreducer);
  const isLogged = useSelector((state) => state.isLogged);
  const { user = [] } = useSelector((state) => state.userReduscer);

  // const arr = [1, 2, 3];
  // console.log(arr);

  // console.log(arr.filter((n) => n !== 2));

  console.log(user);

  const submitHand = () => {
    //  dispatch(storename([name, id]));
    dispatch(
      storename({
        Id: uuidv4(),
        Name: name,
        Age: 25,
      })
    );
    setName("");
  };

  return (
    <TopContainer>
      {isLogged ? <h1>Welcome Trupesh</h1> : <h1>User in not loged-in</h1>}
      <button onClick={() => dispatch(log())}>Make user login</button>
      <br /> <br />
      <h2 style={{ margin: "10px 0" }}>Counter {countreducer}</h2>
      <input
        disabled={!isLogged}
        type="number"
        onChange={(e) => setnum(e.target.value)}
        value={num}
      />
      <button
        disabled={!isLogged}
        onClick={() => dispatch(inc(parseFloat(num) || 5))}
      >
        +
      </button>
      <button
        disabled={!isLogged}
        onClick={() => dispatch(dec(parseFloat(num) || 5))}
      >
        -
      </button>
      <ItemBox>
        <h3>{`Total User ${user?.length}`}</h3>
        {user?.map((profile, i) => {
          // console.log(profile);
          return (
            <ol key={i}>
              <li>{`Name is: ${profile.Name}`}</li>
              <li>{`ID is: ${profile.Id}`}</li>
              <EditButton
                onClick={() => history.push(`/basic-redux/${profile.Id}`)}
              >
                Edit
              </EditButton>
              <DeleteButton onClick={() => dispatch(removename(profile.Id))}>
                Delete
              </DeleteButton>
            </ol>
          );
        })}
      </ItemBox>
      <input
        type="text"
        //disabled={!isLogged}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
        value={name}
      />
      <button disabled={!name} onClick={submitHand}>
        Add
      </button>
    </TopContainer>
  );
}

// styled component new

const TopContainer = styled.div`
  margin: 90px 0;
`;

const ItemBox = styled.div`
  font-size: 1em;
  width: 350px;
  padding: 0px 10px;
  margin: 20px 0;
  border: 2px dotted palevioletred;
  border-radius: 3px;
`;

const EditButton = styled.button`
  color: palevioletred;
  cursor: pointer;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 10px 10px 0 0;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  color: palevioletred;
  cursor: pointer;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 5px 0 0;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

export default BasicRedux;
