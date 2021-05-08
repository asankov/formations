import * as countriesApi from "../../api/countries";
import * as types from "./actionTypes";

export const loadCountries = () => dispatch => {
  const countriesMap = new Map();
  return countriesApi.getCountries().then(countries => {
    countries.forEach(c => countriesMap.set(c.alpha3Code.toLowerCase(), c));
    dispatch({ type: types.LOAD_COUNTRIES, countries: countriesMap });
  });
};
