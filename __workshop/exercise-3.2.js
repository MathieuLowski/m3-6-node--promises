// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      let lat = data.results[0].geometry.lat;
      let lng = data.results[0].geometry.lng;
      let coord = { lat, lng };
      return coord;
    })
    .catch((error) => {
      console.log("error", error.message);
    });
  // return something...
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress(
  "5240 Chemin Queen Mary, Montreal, QC H3W 1X5"
).then((response) => console.log(response));
