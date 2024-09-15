// PlayersList.jsx
import React from "react";
import Player from "./Player"; // Import the Player component

const PlayersList = ({ players }) => {
  if (!players || players.length === 0) {
    return <p>No players available</p>;
  }

  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          <Player player={player} /> {/* Use the Player component */}
        </li>
      ))}
    </ul>
  );
};

export default PlayersList;
