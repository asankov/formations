import React, { useState } from "react";
import PropTypes from "prop-types";
import InitForm from "./InitForm";
import { connect } from "react-redux";
import { submitTeam } from "../../redux/actions/teamActions";
import { error } from "loglevel";

const InitPage = props => {
  const [errors, setErrors] = useState({});
  const [teamName, setTeamName] = useState(props.teamName);
  const [managerName, setManagerName] = useState(props.managerName);
  const [bench, setBench] = useState([...props.bench]);
  const [players, setPlayers] = useState([...props.players]);

  const disableBench = bench.length >= 9;

  const handlePlayerNameChange = ({ target }, i) => {
    if (errors[i] && target.value) {
      const newErrors = { ...errors };
      delete newErrors[i];
      setErrors(newErrors);
    } else if (!target.value) {
      console.log(errors);
      setErrors({ ...errors, [i]: "Player name is required." });
      console.log(errors);
    }
    let newPlayers = [...players];
    newPlayers[i] = { ...newPlayers[i], lastName: target.value };
    setPlayers(newPlayers);
  };

  const handlePlayerCaptainButtonClicked = i => {
    const newPlayers = [...players];
    newPlayers.map((p, index) => (p.isCaptain = index === i));
    setPlayers(newPlayers);
  };

  const handleBenchPlayerNameChange = (e, i) => {
    const newBench = [...bench];
    newBench[i] = {
      ...newBench[i],
      lastName: e.target.value,
    };
    setBench(newBench);
  };

  const handleBenchGkSelection = i => {
    let newBench = [...bench];
    newBench[i].isGk = !newBench[i].isGk;
    setBench(newBench);
  };

  const handleRemoveBenchPlayer = i => {
    let newBench = [...bench];
    delete newBench[i];
    // filter undefined elements
    newBench = newBench.filter(e => e);
    setBench(newBench);
  };

  const handleAddPlayerToBench = () => {
    if (disableBench) {
      return;
    }
    setBench([...bench, { lastName: "", isGk: false }]);
  };

  const handleTeamNameChange = ({ target }) => setTeamName(target.value);

  const handleManagerNameChange = ({ target }) => setManagerName(target.value);

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    // TODO: different formations
    const playersInFormation = {
      gk: players[0],
      def: [players[1], players[2], players[3], players[4]],
      mid: [players[5], players[6], players[7]],
      att: [players[8], players[9], players[10]],
    };
    // TODO: manager
    props.submitTeam({
      players: playersInFormation,
      bench: bench.filter(p => p.lastName),
      teamName,
      manager: { lastName: managerName },
    });
    props.history.push("/field");
  };

  const validateForm = () => {
    const _errors = {};
    players.forEach((player, i) => {
      if (!player.lastName) {
        _errors[i] = "Player name is required.";
      }
    });

    if (!managerName) {
      _errors["manager"] = "Manager name is required.";
    }

    setErrors(_errors);
    return Object.entries(_errors).length === 0;
  };

  return (
    <InitForm
      players={players}
      bench={bench}
      teamName={teamName}
      managerName={managerName}
      errors={errors}
      disableBench={disableBench}
      onPlayerNameChange={handlePlayerNameChange}
      onPlayerCaptainButtonClicked={handlePlayerCaptainButtonClicked}
      onTeamNameChange={handleTeamNameChange}
      onManagerNameChange={handleManagerNameChange}
      onBenchPlayerNameChange={handleBenchPlayerNameChange}
      onBenchGkSelection={handleBenchGkSelection}
      onRemoveBenchPlayer={handleRemoveBenchPlayer}
      onAddPlayerToBench={handleAddPlayerToBench}
      onSubmit={handleSubmit}
    />
  );
};

InitPage.propTypes = {
  players: PropTypes.array.isRequired,
  bench: PropTypes.array.isRequired,
  teamName: PropTypes.string,
  managerName: PropTypes.string,
  submitTeam: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    players: state.players,
    bench: state.bench,
    teamName: state.teamName,
    managerName: state.manager.lastName,
  };
};

const mapDispatchToProps = {
  submitTeam,
};
export default connect(mapStateToProps, mapDispatchToProps)(InitPage);
