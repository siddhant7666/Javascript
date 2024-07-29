"use strict";

//datatype
console.log("Siddhant")

let name = "Siddhant" //string
let age = 18 //number
let isLoggedIn = false; //boolean


// null => standalone value {can be assigned}

// undefined {no value defined or assigned}

//symbol => unique

//object => will do it later


console.log(typeof age); //number
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof "Siddhant") //string
console.log(typeof isLoggedIn)
console.log(2+2)
console.log(2*2)
console.log(2%2)
console.log(2-2)
console.log(3*2)
console.log(5%2)


// Two types of datatype

//1. PRIMITIVE 

//7 TYPES (CALL BY VALUE): STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BigInt

//2. REFERENCE TYPE (Non - Primitive) - Call by reference

// Array, Objects, Functions


 //Is JS statically defined or dynamically defined?

/*

Answer: 

JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime rather than at compile-time. In JavaScript, you don't need to explicitly specify the data type of a variable when you declare it; the type is inferred based on the value assigned to it. For example:


let x = 5;        // x is initially a number
x = "Hello";      // x is now a string
In this example, the variable x changes its type from a number to a string, demonstrating the dynamic nature of JavaScript.


*/