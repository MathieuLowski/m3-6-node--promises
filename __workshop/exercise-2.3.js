// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// get the code you wrote in 2.2 and paste it here...
const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      //data: { lang: 'English', code: 'EN', text: 'Hello' }
      ///console.log(langCode); //fr

      return parsedResponse; // 2
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

greeting("ct").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
