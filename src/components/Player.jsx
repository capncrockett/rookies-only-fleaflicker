// Player.jsx
import React from "react";

const Player = ({ player }) => {
  return (
    <div>
      <h3>{player.proPlayer.nameFull}</h3> {/* Display player's full name */}
      {/* Add more player details here if needed */}
      <p>Position: {player.proPlayer.position}</p>
      <p>Team: {player.proPlayer.proTeamAbbreviation}</p>
      <img
        src={player.proPlayer.headshotUrl}
        alt={`${player.proPlayer.nameFull} headshot`}
      />
    </div>
  );
};

export default Player;
