import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// import React, { useState, useEffect } from "react";

function App() {
  console.log("Hi");

  const rosters = axios
    .get("http://localhost:3001/api/league-rosters", {
      params: {
        sport: "NFL",
        league_id: 343168,
        season: 2023,
        // Add any other parameters
      },
    })
    .then((response) => {
      console.log(response.data); // Handle the response data
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  console.table(rosters);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
