import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const CountrySelectComponent = ({
  countries,
  selectedCountryCode,
  onCountrySelect,
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [countryFilter, setCountryFilter] = useState("");
  // keep this in a separate state, so that we can filter the selection
  // whilst keeping the full list of countries
  const [countriesToSelectFrom, setCountriesToSelectFrom] = useState(countries);

  useEffect(() => {
    setCountriesToSelectFrom(countries);
  }, [countries]);

  const handleEscape = e => {
    if (e.keyCode === 27) {
      setDropdownIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const renderCountryOption = option => {
    const { cca2, flags, name } = option;
    const code = cca2.toLowerCase();
    let className = "option";
    const isSelected = code === selectedCountryCode;
    if (isSelected) {
      className += " selected";
    }
    return (
      <div
        className={className}
        value={code}
        key={code}
        onClick={() => {
          onCountrySelect(code);
          setDropdownIsOpen(false);
        }}
      >
        <img className="option-flag" src={flags.svg} />
        <div className="option-name">{name.common.toUpperCase()}</div>
      </div>
    );
  };

  const renderSelectedCountryOption = () => {
    const selectedCountry = countries.get(selectedCountryCode);
    if (!selectedCountry) {
      return null;
    }
    if (!countryFilter) {
      return renderCountryOption(selectedCountry);
    }
    return (
      selectedCountry.name.includes(countryFilter) &&
      renderCountryOption(selectedCountry)
    );
  };

  return (
    <>
      <div
        className="country-select-container"
        style={{
          display: dropdownIsOpen ? "none" : "flex",
        }}
      >
        <div
          className="country-dropdown-arrow"
          onClick={() => {
            setDropdownIsOpen(!dropdownIsOpen);
          }}
        >
          ↓
        </div>
        <div className="country-flag-container">
          <img
            className="country-flag"
            src={`https://countryflagsapi.com/svg/${selectedCountryCode}`}
          />
        </div>
      </div>
      <div
        className="options"
        style={{ display: dropdownIsOpen ? "inline" : "none" }}
      >
        <div className="search-container">
          <div className="magnifying-glass">🔍</div>
          <input
            className="country-search"
            onChange={({ target }) => {
              const filter = target.value.toUpperCase();
              setCountryFilter(filter);
              setCountriesToSelectFrom(
                Array.from(countries.values()).filter(c =>
                  c.name.common.toUpperCase().includes(filter)
                )
              );
            }}
          ></input>
        </div>
        <div className="countries">
          {renderSelectedCountryOption()}
          {Array.from(countriesToSelectFrom.entries()).map(([_, v]) =>
            renderCountryOption(v)
          )}
        </div>
      </div>
    </>
  );
};

CountrySelectComponent.propTypes = {
  countries: PropTypes.array.isRequired,
  selectedCountryCode: PropTypes.string.isRequired,
  onCountrySelect: PropTypes.func.isRequired,
};

export default CountrySelectComponent;
