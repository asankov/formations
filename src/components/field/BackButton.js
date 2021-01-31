import React from "react";
import PropTypes from "prop-types";

const BackButton = ({ onClick }) => (
  <div className="back-button" onClick={onClick}>
    <span className="back-button-text">⬅</span>
  </div>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
