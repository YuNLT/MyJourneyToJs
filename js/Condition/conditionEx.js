//Your First InterActive Game
let playerConfirm = confirm("Do you want to play rock, paper scissor gaem?");
if(playerConfirm){
    let playerChoice = prompt("Please enter your choice: rock, paper, or scissors?");
    if(playerChoice){
        //play
        let player = playerChoice.trim().toLowerCase();
        if(player === "rock" || player === "paper" || player === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";
            let result = 
            player === computer ? "\ntie game"
            : player === "rock" && computer === "paper" ? "\ncomputer wins"
            : player === "scissors" && computer === "rock" ? "\ncomputer wins"
            : player === "paper" && computer === "scissors" ? "\ncomputer wins"
            : "\nplayer win";
            alert(result);
            let playAgain = confirm("Do you want to play again?");
            playAgain ? location.reload() : alert("OK, maybe next time.");
        }
        else{
            alert("You did not enter a valid choice.");
        }
    }
    else{
        alert("You did not enter a choice.");
    }
}
else{
    alert("OK, maybe next time.");
}