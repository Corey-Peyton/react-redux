import React, { useState, useEffect } from "react";

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
    <div style={{ marginTop: "50px" }}>
      <h3>
        <ol>
          {todo.map((arr) => (
            <div key={arr.id}>
              <li>{arr.text}</li>
              <button
                onClick={() =>
                  setTodo(todo.filter((dele) => dele.id !== arr.id))
                }
              >
                Delete
              </button>
            </div>
          ))}
        </ol>
      </h3>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputvalue}
      />
      <button disabled={!inputvalue} onClick={submithend}>
        Submit
      </button>
    </div>
  );
};

export default Todo;
