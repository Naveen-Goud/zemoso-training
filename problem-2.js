// Write a program to demonstrate how a function can be passed as a parameter to another function.

// function gives multiplication of two inputs
var c=(n1,n2)=> n1*n2

var d=(c,n3) => c*n3   //function c is a arguement in second function

console.log(d(c(2,5),4)); //prints the output on the screen