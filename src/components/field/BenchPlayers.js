import React from "react";
import PropTypes from "prop-types";

const Players = ({ benchPlayers }) => {
  if (!benchPlayers.length) {
    return null;
  }
  return (
    <div className="bench">
      <div className="substitutes-headline">SUBSTITUTES</div>
      {benchPlayers.map((player, i) => (
        <div key={i} className="bench-player">
          <span className="first-name">{player.firstName}</span>{" "}
          <span className="family-name">{player.lastName}</span>
          {player.isGk && <span className="gk-label">GK</span>}
        </div>
      ))}
    </div>
  );
};

Players.propTypes = {
  benchPlayers: PropTypes.array.isRequired,
};

export default Players;
