import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Todo = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todo, setTodo] = useState([{ text: "Fix", id: 1 }]);

  const submithend = () => {
    setTodo([...todo, { text: inputvalue, id: Math.random() }]);
    setInputValue("");
  };

  // useEffect(() => {
  //   gettolocal();
  // }, []);
  // useEffect(() => {
  //   savetolocal();
  // }, [todo]);

  // const arr = { name: "trupesh", age: "22" };
  // const { name, age } = arr;
  // console.log(arr);
  // console.log(`my name is ${name} and age is ${age}`);

  // const user = [
  //   { user: "trupesh", age: 22 },
  //   { user: "chapaneri", age: 23 },
  // ];
  // const moduser2 = user.filter(
  //   (user) => user.age === 22 || user.name === "trupesh"
  // );

  // console.log(`this is filterd value ${JSON.stringify(moduser2)}`);
  return (
    <TopContainer>
      <h2>
        <ol style={{ padding: "0" }}>
          {todo.map((arr) => (
            <ItemBox key={arr.id}>
              <li>{arr.text}</li>
              <DeleButton
                onClick={() =>
                  setTodo(todo.filter((dele) => dele.id !== arr.id))
                }
              >
                Delete
              </DeleButton>
            </ItemBox>
          ))}
        </ol>
      </h2>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputvalue}
      />
      <button disabled={!inputvalue} onClick={submithend}>
        Submit
      </button>
    </TopContainer>
  );
};

// styled component

const TopContainer = styled.div`
  margin: 90px 0;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  padding: 10px 30px;
  margin: 10px;
  border: 2px dotted palevioletred;
  border-radius: 3px;
  font-size: 18px;
`;

const DeleButton = styled.button`
  color: palevioletred;
  font-size: 14px;
  padding: 0.25em 1em;
  margin-left: 10px;
  border: 1px solid palevioletred;
  border-radius: 20px;
`;

export default Todo;
