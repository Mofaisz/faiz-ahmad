// Write a function that returns the youngest and oldest person in each profession.

let people = require("./data.js");

function yougestAndOldest(people) {
  let result = people.reduce((accumulator, value) => {
    if (!accumulator[value.profession]) {
      accumulator[value.profession] = [];
    }
    accumulator[value.profession].push(value.age);
    return accumulator;
  }, {});

  let finalResult = Object.keys(result).reduce((accumulator, value) => {
    youngest = 100;
    oldest = 0;
    result[value].forEach((val) => {
      if (val < youngest) {
        youngest = val;
      }
      if (val > oldest) {
        oldest = val;
      }
    });
    accumulator[value] = { youngest: youngest, oldest: oldest };
    return accumulator;
  }, {});
  return finalResult;
}

console.log(yougestAndOldest(people));
