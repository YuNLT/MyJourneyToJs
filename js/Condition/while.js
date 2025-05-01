let myNumber = 0;
while(myNumber <15){
    myNumber++;
    console.log(myNumber);
}
//don't create an infinite loop

let myNumber2 = 15;
do{
    console.log(myNumber2);
}
while(myNumber2 < 15);

//for loop
let myName = "John Doe";
for(let i=0; i<= myName.length; i++){
    console.log(myName.charAt(i));
}

let myName2 = "John Doe";
let counter = 0;
let myLetter;
while(true){
    myLetter = myName2[counter];
    console.log(myLetter);
    if(myLetter === " ") break;
    counter++;
}