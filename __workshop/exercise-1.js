// Exercise 1
// ------------

const arrayOfWords = ["cucumbers", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];
const makeAllCaps = (arr) => {
  myPromise = new Promise((resolve, reject) => {
    let newArr = arr.map((element) => {
      if (typeof element !== "string") {
        reject(undefined);
      } else return element.toUpperCase();
    });
    resolve(newArr);
  });
  return myPromise;
};
const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    resolve(array.sort());
  });

  return myPromise;
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
