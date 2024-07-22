let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
    
    
}
const drawGame=()=>{
    console.log("The Game is draw.....");
    msg.style.backgroundColor="blue";
    msg.innerText="The Game is Draw !... Try again ..!"
    
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.style.backgroundColor="green";
        msg.innerText="You Win!!";
        
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Loose!!");
        msg.style.backgroundColor="red";
        msg,innerText="You Loose!!";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log("User choice is : ",userChoice);
    console.log("Computer choice is :",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"?false:true;
        }else if(userChoice==="Paper"){
            userWin=compChoice==="Scissors"?false:true;
        }else{
            userWin=compChoice==="Rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});