let humanScore = 0;
let computerScore = 0;
let gameRounds = 1;

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
    choice = window.prompt("Paper, Rock, Scissor Game!!!\nWhat Is Your Choice?");
    return choice;
}
   

function buttonAction(){
    for (let i = 0; i < 5; i++) {
    console.log(playGame());
    console.log("Your Score: "+humanScore);
    console.log("Computer Score: "+computerScore);
}
}

function playGame(){
    const compResult = getComputerChoice(3);
    const humanInput = getHumanchoice();
    const humanResult = humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
    console.log("Round: "+gameRounds);
    console.log("Computer Choice: "+compResult);
    console.log("Your Choice: "+humanResult);


    let result = "";

    if(compResult==="Rock" && humanResult=="Paper" || 
        compResult==="Paper" && humanResult==="Scissor" || 
        compResult==="Scissor" && humanResult==="Rock"
    ){result = "You Win! " + humanResult + " Beats " + compResult; 
        humanScore++;
        
    }else if(compResult==="Rock" && humanResult==="Scissor" || 
        compResult==="Paper" && humanResult==="Rock" || 
        compResult==="Scissor" && humanResult==="Paper" 
    ){result = "You Lose! " + compResult + " Beats " + humanResult; 
        computerScore++;
    
    }else if(compResult === humanResult 
    ){result = "Draw! Same Choice!"; 
         
        
    }else{result = "Invalid Choice!!";
        alert("Invalid Choice!!")
    }
    
    gameRounds++;
    return result;
}

function reset(){
    console.clear();
    gameRounds = 1;
    computerScore = 0;
    humanScore = 0;
}