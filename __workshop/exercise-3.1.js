// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = () => {
  return request(`http://api.open-notify.org/iss-now.json`)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      console.log(parsedResponse);
      let lat = parsedResponse.iss_position.latitude;
      let lng = parsedResponse.iss_position.longitude;
      console.log(lat);
      console.log(lng);
      return;
    });
};

getIssPosition();
