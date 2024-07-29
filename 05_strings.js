let userName =  "Siddhant"
const age = 22;
console.log(userName);
// console.log("Hello Ji, " + userName);
// don't write like these  in modern day js


// use backtick(``)
// String interpolation is a computer programming technique that evaluates a string literal with placeholders and replaces them with their corresponding values


console.log(`Hello, my userName is ${userName} and my age is ${age}`);



const gameName = new String('HelloWorld')

console.log(gameName[0]); // H

const newgameName = " Namaste Duniya"
console.log(newgameName[0]); // space will get printed
console.log(newgameName[1]); // a


console.log(gameName.length);
console.log(newgameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString); // Hell (0-3)

const anotherString = gameName.slice(0,4);
console.log(anotherString); // Hell

// anotherString=gameName.slice(-5,4)
// console.log(anotherString);


// TRIM SPACES 

const newStringOne = "    Siddhant.   "

console.log(newStringOne);//     Siddhant.   
console.log(newStringOne.trim()); //Siddhant.


const url = "https://siddhant.com/siddhant%20singh";

console.log(url.replace('%20', '-'));
//https://siddhant.com/siddhant-singh


console.log(url.includes('siddhant'));//true

console.log(url.includes('padhai'));//false



