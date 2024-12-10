// Find all lawyers aged below 35 with a salary above 80,000 and sort them by age.

let people = require("./data.js");

function allLawyers(people){

    let result = people.reduce((accumulator,value) =>{

        if(value.profession=="Lawyer" && value.age<35 && value.salary>80000){
            accumulator.push({name:value.name , age:value.age})
        }
         
        return accumulator;
    },[])

    return result.sort((a,b) => a.age-b.age);
}
console.log(allLawyers(people))