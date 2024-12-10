// Write a function to return a list of engineers who are above 30 years of age.
let people = require("./data.js");

function listOFEngineers(people){

    let result = people.reduce((accumulator,value) =>{

        if(value.age>30){
            accumulator.push(value.name)
        }
        return accumulator;

    },[])
    return result;
}
console.log(listOFEngineers(people));