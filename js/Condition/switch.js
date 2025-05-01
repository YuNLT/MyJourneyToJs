//Conditional : switch statement

//syntax
player = "scissors";
computer = "paper";
switch(player){
    case computer:
        //runthis code
        console.log("tie game");
        break;
    case "scissors":
        //run this different code
        if(computer === "paper"){
            console.log("player1 win");
        }
        else{
            console.log("computer win");
        }
        break;
    case "rock":
        //run this different code
        if(computer === "scissors"){
            console.log("player1 win");
        }
        else{
            console.log("computer win");
        }
        break;
    default:
        //run this code if no case matches
        //no need for the break here
        if(computer === "rock"){
            console.log("player1 win");
        }
        else{
            console.log("computer win");
        }
        console.log("No match found");
}