import React from "react";
import PropTypes from "prop-types";

const Manager = ({ manager }) => {
  return (
    <div className="manager">
      <div className="manager-headline">MANAGER</div>
      <div className="manager-name">
        <span className="first-name">{manager.firstName}</span>{" "}
        <span className="family-name">{manager.lastName}</span>
      </div>
    </div>
  );
};

Manager.propTypes = {
  manager: PropTypes.object.isRequired,
};

export default Manager;
