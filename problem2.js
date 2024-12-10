// Group the users based on the profession:

// Expected output:
// {
//     Doctor: [] ,// you have to add all the names of the persons whose profession is doctor,
//     Lawyer: [] , // you have to add all the names of the persons whose profession is doctor,
//  ...
//  }

let people = require("./data.js");
function profession(people) {
  let result = people.reduce((accumulator, value) => {
    if (!accumulator[value.profession]) {
      accumulator[value.profession] = [];
    }
    accumulator[value.profession].push(value.name);

    return accumulator;
  }, {});
  return result;
}

console.log(profession(people));
