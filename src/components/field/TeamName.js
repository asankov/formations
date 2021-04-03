import React from "react";
import PropTypes from "prop-types";

const TeamName = ({ teamName }) => (
  <div className="team-name-container">
    <span className="team-name">{teamName}</span>
  </div>
);

TeamName.propTypes = {
  teamName: PropTypes.string.isRequired,
};

export default TeamName;
