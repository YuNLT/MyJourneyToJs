//Objects
//Key-value pairs in curly braces
//Syntax
const myObj = {name: "Dave"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies:["Eat","Sleep","coding"],
    beverage: {
        morning: "coffee",
        afternoon: "tea",
        evening: "water"
    },
    action: function(){
        return `Time for ${this.beverage.evening} `;
    }
}
console.log(anotherObj.action()); // Sleep