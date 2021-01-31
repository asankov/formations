import React from "react";
import PropTypes from "prop-types";
import plLogo from "../../logo.png";

const TeamName = ({ teamName }) => (
  <div className="team-name-container">
    <span className="team-name">{teamName}</span>
    <div className="pl-logo-container">
      <img className="pl-logo" src={plLogo} alt="" />
    </div>
  </div>
);

TeamName.propTypes = {
  teamName: PropTypes.string.isRequired,
};

export default TeamName;
