#!/usr/bin/node

function add(a, b) {
  return a + b;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

console.log(isNaN(num1) || isNaN(num2) ? "NaN" : add(num1, num2));
