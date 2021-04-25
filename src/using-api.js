import React, { useEffect } from "react";
import axios from "axios";

function UsingApi() {
  useEffect(() => {
    const api = axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((dat) => console.log(dat.data))
      .catch((err) => console.log(err));

    console.log(api);
  }, []);

  return <h1>Usinsdfds</h1>;
}

export default UsingApi;
