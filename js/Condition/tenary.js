//Conditionals: Ternary Operator

//Syntax
//condition ? iftrue : iffalse;

let soup= "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, No soup for you"
: soup 
? 'Yes, We have ${soup} today'
: "Sorry, No soup today";
console.log(soupAccess);

let testScore = 65;
let grade = testScore >= 90 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(grade);

let player = "scissors";
let computer = "paper";
let result = player === computer ? "tie game" 
: player === "rock" && computer === "paper" ? "computer win"
: player === "scissors" && computer === "rock" ? "computer win"
:player === "paper" && computer === "scissors" ? "computer win"
: "player win";
console.log(result);
//The above code is a nested ternary operator, which is not recommended for readability.
