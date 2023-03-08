//Refactor the following function into a one-liner:
const printName = (name) => 'Hi' + name;

console.log(printName(`nav`));


//Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return `Hi` + name + `, please pay: ` + bill;
           }

console.log(printBill(`nav`,12));

//Modify the following code such that the object properties are destructured and logged.
const person = {
                name: `Noam Chomsky`,
                age: 92
            }
           
const {name ,age} =person;
console.log(name);
console.log(age);