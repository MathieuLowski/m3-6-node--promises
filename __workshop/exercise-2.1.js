// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");
const { get } = require("request-promise");

const testGreeting = () => {
  return request("https://journeyedu.herokuapp.com/hello") // 1
    .then((response) => {
      const parsedResponse = JSON.parse(response);
      return parsedResponse.data.text;
    })
    .catch((err) => console.log("Error: ", err));
};
testGreeting().then((result) => console.log(result));
