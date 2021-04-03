import React, { useState } from "react";
import PropTypes from "prop-types";
import InitForm from "./InitForm";
import Header from "../common/Header";
import { connect } from "react-redux";
import { submitTeam } from "../../redux/actions/teamActions";

const InitPage = props => {
  const [errors, setErrors] = useState({});
  const [teamName, setTeamName] = useState(props.teamName);
  const [manager, setManager] = useState(props.manager);
  const [bench, setBench] = useState([...props.bench]);
  const [players, setPlayers] = useState([...props.players]);

  const disableBench = bench.length >= 9;

  const handlePlayerFirstNameChange = ({ target }, i) => {
    let newPlayers = [...players];
    newPlayers[i] = { ...newPlayers[i], firstName: target.value };
    setPlayers(newPlayers);
  };
  const handlePlayerLastNameChange = ({ target }, i) => {
    if (errors[i] && target.value) {
      const newErrors = { ...errors };
      delete newErrors[i];
      setErrors(newErrors);
    } else if (!target.value) {
      setErrors({ ...errors, [i]: "Player name is required." });
    }
    let newPlayers = [...players];
    newPlayers[i] = { ...newPlayers[i], lastName: target.value };
    setPlayers(newPlayers);
  };

  const handlePlayerNumberChange = ({ target }, i) => {
    const regex = /^[0-9]{0,2}$/;
    const value = target.value;
    if (value === "0" || !regex.test(value)) {
      return;
    }
    let newPlayers = [...players];
    newPlayers[i] = { ...newPlayers[i], number: target.value };
    setPlayers(newPlayers);
  };

  const handlePlayerCaptainButtonClicked = i => {
    let newPlayers = [...players];
    newPlayers.forEach((player, index) => {
      newPlayers[index] = { ...player, isCaptain: index === i };
    });
    setPlayers(newPlayers);
  };

  const handleBenchPlayerNameChange = ({ target }, i) => {
    const newBench = [...bench];
    newBench[i] = {
      ...newBench[i],
      [target.name]: target.value,
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

  const handleManagerFirstNameChange = ({ target }) =>
    setManager({ ...manager, firstName: target.value });

  const handleManagerLastNameChange = ({ target }) => {
    // TODO: validation
    setManager({ ...manager, lastName: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    // TODO: different formations

    props.submitTeam({
      players: players,
      bench: bench.filter(p => p.lastName),
      teamName,
      manager: manager,
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

    if (!manager.lastName) {
      _errors["manager"] = "Manager name is required.";
    }

    if (!teamName) {
      _errors["teamName"] = "Team name is required.";
    }

    setErrors(_errors);
    return Object.entries(_errors).length === 0;
  };

  const handlePopulate = e => {
    e.preventDefault();
    setTeamName("TOTTENHAM HOTSPUR FC");
    setManager({ firstName: "JOSE", lastName: "MOURINHO" });
    setBench([
      { firstName: "PAULO", lastName: "GAZZANIGA", isGk: true },
      { firstName: "DAVINSON", lastName: "SANCHEZ", isGk: false },
      { firstName: "SERGE", lastName: "AURIER", isGk: false },
      { firstName: "HARRY", lastName: "WINKS", isGk: false },
      { firstName: "GIOVANI", lastName: "LO CELSO", isGk: false },
      { firstName: "STEVEN", lastName: "BERGWIJN", isGk: false },
      { firstName: "LUCAS", lastName: "MOURA", isGk: false },
    ]);
    setPlayers([
      {
        position: "GK",
        firstName: "HUGO",
        lastName: "LLORIS",
        number: 1,
        isCaptain: true,
      },
      {
        position: "CB",
        firstName: "ERIK",
        lastName: "DIER",
        number: 15,
        isCaptain: false,
      },
      {
        position: "CB",
        firstName: "TOBY",
        lastName: "ALDERWEIRELD",
        number: 4,
        isCaptain: false,
      },
      {
        position: "RB",
        firstName: "MATT",
        lastName: "DOHERTY",
        number: 2,
        isCaptain: false,
      },
      {
        position: "LB",
        firstName: "SERGIO",
        lastName: "REGUILLON",
        number: 3,
        isCaptain: false,
      },
      {
        position: "CM",
        firstName: "PIERRE-EMILE",
        lastName: "HOJBJERG",
        number: 5,
        isCaptain: false,
      },
      {
        position: "RCM",
        firstName: "MOUSSA",
        lastName: "SISSOKO",
        number: 17,
        isCaptain: false,
      },
      {
        position: "LCM",
        firstName: "TANGUY",
        lastName: "NDOMBELE",
        number: 28,
        isCaptain: false,
      },
      {
        position: "RF",
        firstName: "GARETH",
        lastName: "BALE",
        number: 11,
        isCaptain: false,
      },
      {
        position: "LF",
        firstName: "HEUNG-MIN",
        lastName: "SON",
        number: 7,
        isCaptain: false,
      },
      {
        position: "CF",
        firstName: "HARRY",
        lastName: "KANE",
        number: 10,
        isCaptain: false,
      },
    ]);
  };

  return (
    <>
      <Header></Header>
      <InitForm
        players={players}
        bench={bench}
        teamName={teamName}
        manager={manager}
        errors={errors}
        disableBench={disableBench}
        onPlayerFirstNameChange={handlePlayerFirstNameChange}
        onPlayerLastNameChange={handlePlayerLastNameChange}
        onPlayerNumberChange={handlePlayerNumberChange}
        onPlayerCaptainButtonClicked={handlePlayerCaptainButtonClicked}
        onTeamNameChange={handleTeamNameChange}
        onManagerFirstNameChange={handleManagerFirstNameChange}
        onManagerLastNameChange={handleManagerLastNameChange}
        onBenchPlayerNameChange={handleBenchPlayerNameChange}
        onBenchGkSelection={handleBenchGkSelection}
        onRemoveBenchPlayer={handleRemoveBenchPlayer}
        onAddPlayerToBench={handleAddPlayerToBench}
        onSubmit={handleSubmit}
        onPopulate={handlePopulate}
      />
    </>
  );
};

InitPage.propTypes = {
  players: PropTypes.array.isRequired,
  bench: PropTypes.array.isRequired,
  teamName: PropTypes.string,
  manager: PropTypes.object,
  submitTeam: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    players: state.players,
    bench: state.bench,
    teamName: state.teamName,
    manager: state.manager,
  };
};

const mapDispatchToProps = {
  submitTeam,
};
export default connect(mapStateToProps, mapDispatchToProps)(InitPage);
