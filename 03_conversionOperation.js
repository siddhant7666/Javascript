let score = "33abc"

console.log(typeof(score));

let valueInNumber = Number(score) // CONVERSION OF STRING TO NUMBER 

console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" => 33
// "33abc"  => NaN  
// "true" => 1, "false" => 0


/**********OPERATIONS************/


let value = 3
let negValue = -value
console.log(negValue);



let str1 = "Siddhant"
let str2 = " Singh"
let str3 = str1 + str2

console.log(str3);


console.log("1" + 2); //12
console.log(1+"2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32


console.log(true);  // TRUE
console.log(+true);  // 1
// console.log(true+);  // ERROR

console.log(+""); //0

// let num1, num2, num3


// num1 = num2 = num3 = 2 + 2

// not a good way for coding as less readable


let gameCounter = 100
gameCounter++;

console.log(gameCounter); // 101
