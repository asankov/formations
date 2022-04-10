import * as countriesApi from "../../api/countries";
import * as types from "./actionTypes";

export const loadCountries = () => dispatch => {
  const countriesMap = new Map();
  return countriesApi.getCountries().then(countries => {
    console.log(countries)
    countries.forEach(c => countriesMap.set(c.cca3, c));
    dispatch({ type: types.LOAD_COUNTRIES, countries: countriesMap });
  });
};
