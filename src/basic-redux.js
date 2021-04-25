import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, log, storename, removename } from "./action";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function BasicRedux() {
  const dispatch = useDispatch();
  const [num, setnum] = useState();
  const [name, setName] = useState("");

  const countreducer = useSelector((state) => state.countreducer);
  const isLogged = useSelector((state) => state.isLogged);
  const { intstate = [] } = useSelector((state) => state.userReduscer);

  // const arr = [1, 2, 3];
  // console.log(arr);

  // console.log(arr.filter((n) => n !== 2));

  console.log(intstate);

  // console.log(uuidv4());
  const id = uuidv4();

  const submitHand = () => {
    //  dispatch(storename([name, id]));
    dispatch(
      storename([
        ...intstate,
        {
          Id: id,
          Name: name,
        },
      ])
    );
    setName("");
  };

  return (
    <div>
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
      {isLogged ? (
        <>
          <ItemBox>
            <h3>{`Total User ${intstate?.length}`}</h3>
            {intstate?.map((profile, i) => {
              return (
                <ol key={i}>
                  <li>{`Name is ${profile.Name}`}</li>
                  <li>{`ID is ${profile.Id}`}</li>
                  <DeleteButton
                    onClick={() => dispatch(removename(profile.Id))}
                  >
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
        </>
      ) : (
        ""
      )}
    </div>
  );
}

// styled component new

const ItemBox = styled.div`
  font-size: 1em;
  width: fit-content;
  padding: 0.25em 1em;
  margin: 20px 0;
  border: 2px dotted palevioletred;
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 5px 0 0;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

export default BasicRedux;
