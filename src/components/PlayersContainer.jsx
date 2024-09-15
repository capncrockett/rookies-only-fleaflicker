// PlayersContainer.js
import React, { useState, useEffect } from "react";
import PlayersList from "./PlayersList";
import axios from "axios";
import Typography from "@mui/material/Typography";

const PlayersContainer = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/player-listing") // Use the full server URL with port 3001
      .then((response) => {
        if (response.data && response.data.players) {
          setPlayers(response.data.players);
          // Inside the .then() block after setPlayers
        } else {
          console.error("No players found in the response");
          setPlayers([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading players...</Typography>;
  }

  return <PlayersList players={players} />;
};

export default PlayersContainer;
