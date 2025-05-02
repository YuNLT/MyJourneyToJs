//JSON: Javascript Object Notation
/* JSON is used to send and receive DataTransfer.
JSON is a text format taht is completely language independent.
Meaning JSON is used used to send & receive dat in any languages
...not just in javascript */

const myObj = {
    myName: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function(){
        console.log("Hello");
    }
};
console.log(myObj);
console.log(myObj.myName);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); //JSON doesn't sned function
//JSON only send key values properties in JSON format
console.log(typeof sendJSON);
console.log(sendJSON.myName);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);