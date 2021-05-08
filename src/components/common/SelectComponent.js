import React, { useState } from "react";
import "../../styles/select.css";

const SelectComponent = ({ options, keyKey, nameKey, onClick }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    [keyKey]: "---",
    [nameKey]: "---",
  });

  return (
    <div className="select-component">
      <div
        className="dropdown-arrow-container"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="dropdown-arrow">↓</span>
      </div>
      <div className="options">
        <div className="selected-option-container">
          <div className="selected-option">{selectedOption[keyKey]}</div>
        </div>
        <div
          className="other-options-container"
          style={{
            display: showOptions ? "block" : "none",
          }}
        >
          <div className="other-options">
            {options
              .filter(o => o[keyKey] !== selectedOption[keyKey])
              .map(o => (
                <div
                  key={o[keyKey]}
                  className="option"
                  onClick={() => {
                    setSelectedOption(o);
                    setShowOptions(false);
                    onClick(o);
                  }}
                >
                  {o[nameKey]}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectComponent;
