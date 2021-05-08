import React from "react";
import SelectComponent from "../common/SelectComponent";
import "../../styles/presets.css";
import presets from "../../../tools/presets";

const InitPresets = ({ onPopulate }) => {
  return (
    <div className="init-presets-container">
      <div className="presets-text-container">PRESETS:</div>
      <SelectComponent
        options={presets}
        keyKey="teamName"
        nameKey="teamName"
        onClick={onPopulate}
      ></SelectComponent>
    </div>
  );
};

export default InitPresets;
