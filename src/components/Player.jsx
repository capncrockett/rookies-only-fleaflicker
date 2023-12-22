import React from "react";

const Player = ({ player }) => {
  const { nameFull, position, proTeamAbbreviation, isRookie } = player;

  console.log(player);
  console.table(player);

  return (
    <div className="player-card">
      <h3>{nameFull}</h3>
      <p>Position: {position}</p>
      <p>{proTeamAbbreviation}</p>
      <p>{isRookie ? "Rookie" : "Veteran"}</p>
    </div>
  );
};

export default Player;
