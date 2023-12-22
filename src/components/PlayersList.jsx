import React from "react";
import Player from "./Player"; // Make sure the path is correct

const PlayersList = ({ players }) => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
        <Player key={index} player={player.pro_player} />
      ))}
    </div>
  );
};

export default PlayersList;
