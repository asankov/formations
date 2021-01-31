import React, { useEffect } from "react";
import FieldPlayers from "./FieldPlayers";
import PropTypes from "prop-types";
import BenchPlayers from "./BenchPlayers";
import Manager from "./Manager";
import TeamName from "./TeamName";
import TeamLogo from "./TeamLogo";
import { connect } from "react-redux";
import BackButton from "./BackButton";
// import "./font.ttf";

const FieldPage = ({ formation, bench, manager, teamName, ...props }) => {
  useEffect(() => {
    if (!teamName) {
      props.history.push("/");
    }
  }, []);

  const handleClickBack = () => {
    props.history.push("/");
  };

  return (
    <div className="field-page-container">
      <div className="left-side">
        <BackButton onClick={handleClickBack} />
        <TeamLogo />
        <Manager manager={manager} />
        <BenchPlayers benchPlayers={bench} />
      </div>
      <div className="right-side">
        <TeamName teamName={teamName} />
        <FieldPlayers players={formation} />
      </div>
    </div>
  );
};

FieldPage.propTypes = {
  formation: PropTypes.object.isRequired,
  bench: PropTypes.array.isRequired,
  teamName: PropTypes.string,
  manager: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    formation: state.formation,
    bench: state.bench,
    teamName: state.teamName,
    manager: state.manager,
  };
};
export default connect(mapStateToProps)(FieldPage);
