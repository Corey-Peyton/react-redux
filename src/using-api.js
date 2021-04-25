import React, { useEffect, useState } from "react";
import axios from "axios";

function UsingApi() {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((date) => {
        setName(date.data.results);
        console.log(date.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <h1>
      {name.map((d) => {
        return <h3>{d.name}</h3>;
      })}
    </h1>
  );
}

export default UsingApi;
