import React from "react";
import PropTypes from "prop-types";
import InitTeam from "./InitTeam";
import InitPlayers from "./InitPlayers";
import InitBench from "./InitBench";

const InitForm = ({
  players,
  bench,
  teamName,
  managerName,
  errors,
  disableBench,
  onPlayerNameChange,
  onPlayerCaptainButtonClicked,
  onTeamNameChange,
  onManagerNameChange,
  onBenchPlayerNameChange,
  onBenchGkSelection,
  onRemoveBenchPlayer,
  onAddPlayerToBench,
  onSubmit,
}) => {
  return (
    <div className="squad-input">
      <div className="first-column">
        <InitPlayers
          players={players}
          errors={errors}
          onPlayerNameChange={onPlayerNameChange}
          onPlayerCaptainButtonClicked={onPlayerCaptainButtonClicked}
        />
      </div>
      <div className="second-column">
        <InitTeam
          teamName={teamName}
          errors={errors}
          onTeamNameChange={onTeamNameChange}
          managerName={managerName}
          onManagerNameChange={onManagerNameChange}
        />
        <InitBench
          bench={bench}
          onBenchPlayerNameChange={onBenchPlayerNameChange}
          onBenchGkSelection={onBenchGkSelection}
          onRemoveBenchPlayer={onRemoveBenchPlayer}
          disableBench={disableBench}
          onAddPlayerToBench={onAddPlayerToBench}
        />
      </div>
      <div className="third-column">
        <div>
          <button className="submit-button" onClick={onSubmit}>
            {" "}
            READY!{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

InitForm.propTypes = {};

export default InitForm;
