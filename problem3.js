// Find the average salary for each profession:

// Expected output:

// {
//     Doctor: AVERAGE_SALARY, // you need to find the average per profession
//    Nurse: AVERAGE_SALARY,

//    }

let people = require("./data.js");
function averageSalary(people) {
  let result = people.reduce((accumulator, value) => {
    if (!accumulator[value.profession]) {
      accumulator[value.profession] = [];
    }
    accumulator[value.profession].push(value.salary);
    return accumulator;
  }, {});

  let averageSalary = Object.keys(result).reduce((accumulator,value) =>{

    totalSum=0;
    count =0
    
    result[value].forEach((val) =>{
        totalSum+=Number(val)
        count+=1
    })
    average = totalSum/count;
    if(!accumulator[value]){
        accumulator[value]=0
    }
    accumulator[value]=average
    return accumulator;
  },{})
  
//   let averageOFSalary = Object.keys(result).reduce((accumulator, value) => {
//     let totalSum = 0;
//     result[value].forEach((val) => {
//       totalSum += Number(val);

//       totalLength += 1;

//       let average = totalSum / totalLength;
//       if (!accumulator[value]) {
//         accumulator[value] = 0;
//       }
//       accumulator[value] = average;
//     });
//     return accumulator;
//   }, {});
//   return averageOFSalary;
// }

//   let averageOFSalary = Object.keys(result).reduce((accumulator, value) => {
//         totalSum = 0;
//         count = 0;
//     result[value].forEach((val) => {

//       totalSum += Number(val);
//       count += 1;

//       average = totalSum / count;
//       if (!accumulator[!value]) {
//         accumulator[!value] = 0;
//       }
//       accumulator[!value] = average;
//     });

//     // console.log(count);
//     // console.log(totalSum)
//     return accumulator;
//   }, {});
//   return averageOFSalary;
// }
    return averageSalary;
}
console.log(averageSalary(people));
