import React from "react";
import PropTypes from "prop-types";
import InitTeam from "./InitTeam";
import InitPlayers from "./InitPlayers";
import InitBench from "./InitBench";

const InitForm = ({
  players,
  bench,
  teamName,
  manager,
  errors,
  disableBench,
  onPlayerFirstNameChange,
  onPlayerLastNameChange,
  onPlayerNumberChange,
  onPlayerCaptainButtonClicked,
  onTeamNameChange,
  onManagerFirstNameChange,
  onManagerLastNameChange,
  onBenchPlayerNameChange,
  onBenchGkSelection,
  onRemoveBenchPlayer,
  onAddPlayerToBench,
  onSubmit,
  onPopulate,
}) => {
  return (
    <form className="squad-input" onSubmit={onSubmit}>
      <div className="first-column">
        <InitPlayers
          players={players}
          errors={errors}
          onPlayerFirstNameChange={onPlayerFirstNameChange}
          onPlayerLastNameChange={onPlayerLastNameChange}
          onPlayerNumberChange={onPlayerNumberChange}
          onPlayerCaptainButtonClicked={onPlayerCaptainButtonClicked}
        />
      </div>
      <div className="second-column">
        <InitTeam
          teamName={teamName}
          errors={errors}
          onTeamNameChange={onTeamNameChange}
          manager={manager}
          onManagerFirstNameChange={onManagerFirstNameChange}
          onManagerLastNameChange={onManagerLastNameChange}
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
          <button onClick={onPopulate}>Populate</button>
          <button className="submit-button" type="submit">
            {" "}
            READY!{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

InitForm.propTypes = {
  players: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onPlayerFirstNameChange: PropTypes.func.isRequired,
  onPlayerLastNameChange: PropTypes.func.isRequired,
  onPlayerNumberChange: PropTypes.func.isRequired,
  onPlayerCaptainButtonClicked: PropTypes.func.isRequired,
  teamName: PropTypes.string.isRequired,
  onTeamNameChange: PropTypes.func.isRequired,
  manager: PropTypes.object.isRequired,
  onManagerFirstNameChange: PropTypes.func.isRequired,
  onManagerLastNameChange: PropTypes.func.isRequired,
  bench: PropTypes.array.isRequired,
  onBenchPlayerNameChange: PropTypes.func.isRequired,
  onBenchGkSelection: PropTypes.func.isRequired,
  onRemoveBenchPlayer: PropTypes.func.isRequired,
  disableBench: PropTypes.bool.isRequired,
  onAddPlayerToBench: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InitForm;
