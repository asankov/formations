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
  onPlayerFirstNameChange,
  onPlayerLastNameChange,
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
          onPlayerFirstNameChange={onPlayerFirstNameChange}
          onPlayerLastNameChange={onPlayerLastNameChange}
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

InitForm.propTypes = {
  players: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onPlayerFirstNameChange: PropTypes.func.isRequired,
  onPlayerLastNameChange: PropTypes.func.isRequired,
  onPlayerCaptainButtonClicked: PropTypes.func.isRequired,
  teamName: PropTypes.string.isRequired,
  onTeamNameChange: PropTypes.func.isRequired,
  managerName: PropTypes.string.isRequired,
  onManagerNameChange: PropTypes.func.isRequired,
  bench: PropTypes.array.isRequired,
  onBenchPlayerNameChange: PropTypes.func.isRequired,
  onBenchGkSelection: PropTypes.func.isRequired,
  onRemoveBenchPlayer: PropTypes.func.isRequired,
  disableBench: PropTypes.bool.isRequired,
  onAddPlayerToBench: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InitForm;
