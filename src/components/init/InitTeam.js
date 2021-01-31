import React from "react";

const InitTeam = ({
  teamName,
  onTeamNameChange,
  managerName,
  onManagerNameChange,
  errors,
}) => {
  return (
    <>
      <div className="team-name-input">
        <div className="name-input">
          <div className="team-name-heading">TEAM NAME</div>
          <input type="text" value={teamName} onChange={onTeamNameChange} />
        </div>
      </div>
      <div className="team-name-input">
        <div className="name-input">
          <div className="manager-name-input">MANAGER NAME</div>
          <input
            type="text"
            value={managerName}
            onChange={onManagerNameChange}
          />
        </div>
      </div>
      <div className="error-msg">{errors["manager"]}</div>
    </>
  );
};

export default InitTeam;
