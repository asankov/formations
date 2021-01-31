import React from "react";
import PropTypes from "prop-types";

const InitBench = ({
  bench,
  onBenchPlayerNameChange,
  onBenchGkSelection,
  onRemoveBenchPlayer,
  disableBench,
  onAddPlayerToBench,
}) => {
  let className = "add-player-button";
  if (disableBench) {
    className += " disabled";
  }
  return (
    <div className="bench">
      <div className="bench-heading">BENCH</div>
      {bench.map((player, i) => {
        let className = "switch";
        if (player.isGk) {
          className += " switch-selected";
        }
        return (
          <div key={i} className="player-input-container name-input">
            <input
              type="text"
              value={player.lastName}
              onChange={e => onBenchPlayerNameChange(e, i)}
            />
            <div className={className} onClick={() => onBenchGkSelection(i)}>
              GK
            </div>
            <div
              className="remove-bench-player-btn"
              onClick={() => onRemoveBenchPlayer(i)}
            >
              ❌
            </div>
          </div>
        );
      })}
      <div className={className} onClick={onAddPlayerToBench}>
        +
        <span className="add-player-tooltip">
          Up to 9 players are allowed on the bench
        </span>
      </div>
    </div>
  );
};

InitBench.propTypes = {
  bench: PropTypes.array.isRequired,
  onBenchPlayerNameChange: PropTypes.func.isRequired,
  onBenchGkSelection: PropTypes.func.isRequired,
  onRemoveBenchPlayer: PropTypes.func.isRequired,
  disableBench: PropTypes.bool.isRequired,
  onAddPlayerToBench: PropTypes.func.isRequired,
};

export default InitBench;