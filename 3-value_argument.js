#!/usr/bin/node

const myArg = process.argv[2]; // Get the first argument

if (myArg) {
  console.log(myArg); // Print the argument if provided
} else {
  console.log("No argument"); // Print default message if no argument is given
}
