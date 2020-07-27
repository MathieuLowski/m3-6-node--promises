// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat},${lng}`,
  };

  return opencage
    .geocode(requestObj)
    .then((response) => response.results[0].formatted)
    .catch((error) => {
      console.log("error", error.message);
    });

  // return ...
}

getAddressFromPosition("45.497118", "-73.579044").then((response) =>
  console.log(response)
);
//{ lat: 45.497118, lng: -73.579044 }
