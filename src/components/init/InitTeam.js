import React from "react";
import PropTypes from "prop-types";

const InitTeam = ({
  teamName,
  onTeamNameChange,
  manager,
  onManagerFirstNameChange,
  onManagerLastNameChange,
  errors,
}) => {
  return (
    <>
      <div className="team-name-input-container">
        <div className="team-name-heading">TEAM NAME</div>
        <span>
          <input
            type="text"
            className="team-name-input"
            value={teamName}
            onChange={onTeamNameChange}
          />
          <div className="error-msg">{errors["teamName"]}</div>
        </span>
      </div>
      <div className="team-name-input-container">
        <div className="name-input">
          <div className="manager-name-input">MANAGER NAME</div>
          <input
            type="text"
            value={manager.firstName}
            onChange={onManagerFirstNameChange}
          />
          <span style={{ marginLeft: "10px" }}>
            <input
              type="text"
              value={manager.lastName}
              onChange={onManagerLastNameChange}
            />
            <div className="error-msg">{errors["manager"]}</div>
          </span>
        </div>
      </div>
    </>
  );
};

InitTeam.propTypes = {
  teamName: PropTypes.string.isRequired,
  onTeamNameChange: PropTypes.func.isRequired,
  manager: PropTypes.object.isRequired,
  onManagerFirstNameChange: PropTypes.func.isRequired,
  onManagerLastNameChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InitTeam;
