import React from "react";
import PropTypes from "prop-types";

const renderLine = players =>
  players.map((player, i) => renderPlayer(player, i));

const renderPlayer = (player, key) => {
  let captainBadgeStyle = { width: "50px" };
  // hide the airband, but keep the DOM object in order to balance the divs
  if (!player.isCaptain) {
    captainBadgeStyle["visibility"] = "hidden";
  }
  return (
    <div key={key} className="player">
      <div className="player-number-container">
        <img
          src={`https://restcountries.eu/data/${player.country.code}.svg`}
          className="flag"
          alt=""
        />
        <div className="player-number">{player.number}.</div>
        {
          <div style={captainBadgeStyle} className="captain-badge">
            C
          </div>
        }
      </div>
      <span className="player-name">
        <div className="first-name">{player.firstName}</div>
        <div className="family-name">{player.lastName}</div>
      </span>
    </div>
  );
};

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
