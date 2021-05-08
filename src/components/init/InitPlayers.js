import React from "react";
import PropTypes from "prop-types";

const InitPlayers = ({
  players,
  errors,
  onPlayerFirstNameChange,
  onPlayerLastNameChange,
  onPlayerNumberChange,
  onPlayerCaptainButtonClicked,
}) => {
  const renderPlayer = (player, i) => {
    let captainBtnClassName = "captain-switch switch";
    if (player.isCaptain) {
      captainBtnClassName += " switch-selected";
    }
    let inputClassName = "name-input";
    if (errors[i]) {
      inputClassName += " has-error";
    }
    return (
      <div key={i} className="player-input-container">
        <div className="position">{player.position}</div>
        <span className={inputClassName}>
          <input
            style={{ marginRight: "10px", width: "30px" }}
            // TODO; try number with stilyng
            type="text"
            value={player.number}
            onChange={e => onPlayerNumberChange(e, i)}
          />
          <input
            type="text"
            value={player.firstName}
            placeholder="FIRST NAME"
            onChange={e => onPlayerFirstNameChange(e, i)}
          />
          <span style={{ marginLeft: "10px" }}>
            <input
              name="familyName"
              type="text"
              value={player.lastName}
              placeholder="LAST NAME"
              onChange={e => onPlayerLastNameChange(e, i)}
            />
            <div className="error-msg">{errors[i]}</div>
          </span>
        </span>
        <div
          className={captainBtnClassName}
          onClick={() => onPlayerCaptainButtonClicked(i)}
        >
          C
        </div>
      </div>
    );
  };
  return <div className="squad">{players.map(renderPlayer)}</div>;
};

InitPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onPlayerFirstNameChange: PropTypes.func.isRequired,
  onPlayerLastNameChange: PropTypes.func.isRequired,
  onPlayerNumberChange: PropTypes.func.isRequired,
  onPlayerCaptainButtonClicked: PropTypes.func.isRequired,
};

export default InitPlayers;
