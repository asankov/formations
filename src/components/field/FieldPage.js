import React from "react";
import BenchPlayers from "./FieldPlayers";
import PropTypes from "prop-types";
import FieldPlayers from "./BenchPlayers";
import Manager from "./Manager";
import TeamName from "./TeamName";
import TeamLogo from "./TeamLogo";
import { connect } from "react-redux";
// import "./font.ttf";

const FieldPage = ({ players, bench, manager, teamName }) => (
  <div className="field-page-container">
    <div className="left-side">
      <TeamLogo />
      <Manager manager={manager} />
      <BenchPlayers benchPlayers={bench} />
    </div>
    <div className="right-side">
      <TeamName teamName={teamName} />
      <FieldPlayers players={players} />
    </div>
  </div>
);

FieldPage.propTypes = {
  players: PropTypes.array.isRequired,
  bench: PropTypes.array.isRequired,
  teamName: PropTypes.string,
  manager: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    players: state.players,
    bench: state.bench,
    teamName: state.teamName,
    manager: state.manager,
  };
};
export default connect(mapStateToProps)(FieldPage);
