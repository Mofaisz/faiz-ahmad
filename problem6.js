let items = require("/home/faiz/faizAhmad/data2.js");

//  filter electronics below $100.5, use only reduce
// and give output like this "the items less than $100.5 are 1. mouse pad 2. adapter ..."

function electronicsList(items) {
  let result = items.reduce((accumulator, value) => {
    p = parseInt(value.price.replace("$", " "));

    if (value.category == "electronics" && p < 100.5) {
      accumulator.push(value.item);
    }
    return accumulator;
  }, []);
  return result;
}

console.log(electronicsList(items));
