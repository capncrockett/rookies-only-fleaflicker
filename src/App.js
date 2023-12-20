import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [rosters, setRosters] = useState(null);

  useEffect(() => {
    axios
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
        setRosters(response.data); // Update state with the response data
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  // Log the rosters data (this will initially log null until the data is fetched)
  console.table(rosters);
  const teamRostersArray = rosters.rosters;
  console.log(teamRostersArray[0]);
  const firstRoster = teamRostersArray[0];
  const secondRoster = teamRostersArray[1];
  const thirdRoster = teamRostersArray[2];
  const fourthRoster = teamRostersArray[3];

  return (
    <div className="App">
      <header className="App-header">
        <p>{firstRoster.team.name}</p>
        <p>{secondRoster.team.name}</p>
        <p>{thirdRoster.team.name}</p>
        <p>{fourthRoster.team.name}</p>
      </header>
    </div>
  );
}

export default App;
