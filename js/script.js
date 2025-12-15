let humanScore = 0;
let computerScore = 0;

function alertConnect(){
    console.log("Connected!!!");
}
alertConnect();

function getComputerChoice(max) {
  let x = Math.floor(Math.random() * max);
  let xstring = "";
  
    if (x === 0){xstring = "Rock";
    }else if(
        x === 1){xstring = "Paper";
    }else{
        xstring = "Scissor";}    
   
  return xstring;
}

function getHumanchoice(){
    choice = window.prompt("what is your choice?");
    return choice;
}
   
    const compResult = getComputerChoice(3);
    const humanResult = getHumanchoice();
    console.log("Computer Choice: "+compResult);
    console.log("Your Choice: "+humanResult);

function playRound(humanChoice, computerChoice){
    let result = "";

    if(compResult==="Rock" && humanResult==="Paper" || 
        compResult==="Paper" && humanResult==="Scissor" || 
        compResult==="Scissor" && humanResult==="Rock"
    ){result = "You Win! " + humanResult + " Beats " + compResult, humanScore++;

    }else if(compResult==="Rock" && humanResult==="Scissor" || 
        compResult==="Paper" && humanResult==="Rock" || 
        compResult==="Scissor" && humanResult==="Paper" 
    ){result = "You Lose! " + compResult + " Beats " + humanResult, computerScore;
        
    }else{result = "Draw! Same Choice!";}
    
    return result;
    
}

// playRound(compResult,humanResult);

console.log(playRound());
console.log("Your Score: "+humanScore);
console.log("Computer Score: "+computerScore);

function playGame(){
    
}