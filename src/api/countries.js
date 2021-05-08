export const getCountries = () => {
  return fetch("https://restcountries.eu/rest/v2/all").then(handleResponse);
};

const handleResponse = async response => {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
};
