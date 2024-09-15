import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Player from "./components/Player";
import ScoringPeriodRange from "./components/Scoring";
// import PlayerList from "./components/PlayerList";
import Button from "@mui/material/Button";

function App() {
  const [rosters, setRosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setRosters(response.data.rosters || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching rosters: {error.message}</div>;
  }

  const [firstRoster, secondRoster, thirdRoster, fourthRoster] = rosters;

  // console.table(rosters);

  return (
    <div className="App">
      <header className="App-header">
        <ScoringPeriodRange />
        <Button variant="contained">Hello world</Button>
        {/* <p>{firstRoster?.team.name}</p>
        <p>{secondRoster?.team.name}</p>
        <p>{thirdRoster?.team.name}</p>
        <p>{fourthRoster?.team.name}</p> */}
        <Player player={firstRoster?.players[0].proPlayer} />
      </header>
    </div>
  );
}

export default App;
