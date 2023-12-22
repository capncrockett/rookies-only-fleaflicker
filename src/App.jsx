import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
        setRosters(response.data.rosters || []); // Update state with the response data
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching rosters: {error.message}</div>;
  }

  const [firstRoster, secondRoster, thirdRoster, fourthRoster] = rosters;

  return (
    <div className="App">
      <header className="App-header">
        <p>{firstRoster?.team.name}</p>
        <p>{secondRoster?.team.name}</p>
        <p>{thirdRoster?.team.name}</p>
        <p>{fourthRoster?.team.name}</p>
      </header>
    </div>
  );
}

export default App;
