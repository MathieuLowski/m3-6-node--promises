// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      //data: { lang: 'English', code: 'EN', text: 'Hello' }
      ///console.log(langCode); //fr

      return parsedResponse; // 2
    })
    .catch((err) => console.log("Error: ", err));
};

// Testing
greeting("fr").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3

greeting("pl").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("ar").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
