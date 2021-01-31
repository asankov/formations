import React from "react";
import PropTypes from "prop-types";
import englandFlag from "../../flag-england.png";

const renderLine = players =>
  players.map((player, i) => renderPlayer(player, i));

const renderPlayer = (player, key) => (
  <div key={key} className="player">
    <img src={englandFlag} className="flag" alt="" />
    <span className="player-name">
      <div className="first-name">{player.firstName}</div>
      <div className="family-name">{player.lastName}</div>
    </span>
  </div>
);

const Players = ({ players }) => {
  return (
    <div className="field-wrapper">
      <div className="field">
        <div className="gk-line">{renderPlayer(players.gk)}</div>
        <div className="defence-line line">{renderLine(players.def)}</div>
        <div className="midfield-line line">{renderLine(players.mid)}</div>
        <div className="attack-line line">{renderLine(players.att)}</div>
      </div>
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.object.isRequired,
};

export default Players;
