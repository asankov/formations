import React from "react";

const InitPlayers = ({
  players,
  errors,
  onPlayerNameChange,
  onPlayerCaptainButtonClicked,
}) => {
  const renderPlayer = (player, i) => {
    let captainBtnClassName = "switch";
    if (player.isCaptain) {
      captainBtnClassName += " switch-selected";
    }
    let inputClassName = "player-input name-input";
    if (errors[i]) {
      inputClassName += " has-error";
    }
    return (
      <>
        <div key={i} className={inputClassName}>
          <div className="position">{player.position}</div>
          <input
            type="text"
            value={player.lastName}
            onChange={e => onPlayerNameChange(e, i)}
          />
          <div
            className={captainBtnClassName}
            onClick={() => onPlayerCaptainButtonClicked(i)}
          >
            C
          </div>
        </div>
        <div className="error-msg">{errors[i]}</div>
      </>
    );
  };
  return <div className="squad">{players.map(renderPlayer)}</div>;
};

export default InitPlayers;
