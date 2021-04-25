import React, { useEffect } from "react";
import axios from "axios";

function UsingApi() {
  useEffect(() => {
    const api = axios
      .get("https://api.fortnitetracker.com/v1/store")
      .then((dat) => {
        console.log(dat);
      })
      .catch((err) => console.log(err));
    console.log(api);
  }, []);
  return <h1>Usinsdfds</h1>;
}

export default UsingApi;
