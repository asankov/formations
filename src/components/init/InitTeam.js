import React from "react";
import PropTypes from "prop-types";

const InitTeam = ({
  teamName,
  onTeamNameChange,
  managerName,
  onManagerNameChange,
  errors,
}) => {
  return (
    <>
      <div className="team-name-input-container">
        <div className="team-name-heading">TEAM NAME</div>
        <span>
          <input type="text" value={teamName} onChange={onTeamNameChange} />
          <div className="error-msg">{errors["teamName"]}</div>
        </span>
      </div>
      <div className="team-name-input-container">
        <div className="name-input">
          <div className="manager-name-input">MANAGER NAME</div>
          <span>
            <input
              type="text"
              value={managerName}
              onChange={onManagerNameChange}
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
  managerName: PropTypes.string.isRequired,
  onManagerNameChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InitTeam;
