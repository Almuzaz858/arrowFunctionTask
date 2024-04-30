// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;

********************************/

const greet = (name) => {
    console.log(`Hello, ${name}!`);
}

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum = (num1, num2) => {

    return num1 + num2
}

// Q3) Write a simple arrow function that squares a number.

const sum2 =(num1) => {
    return num1 * num1
}

greet ("Ziad")