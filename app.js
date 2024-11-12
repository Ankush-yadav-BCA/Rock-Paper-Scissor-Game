let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let userReaction = "";
let comReaction = "";
let userScore = 0;
let comScore = 0;
let yourScore = document.querySelector("#userScore");
let opponentScore = document.querySelector("#comScore");
let restartBtn = document.querySelector("#restart");
let finalResult = document.querySelector("#final");
let gamefield = document.querySelector(".gamefield");

restartBtn.addEventListener("click",()=>{
    gameReset();
})

finalResult.addEventListener("click",()=>{
    let result = document.createElement("h2");
    gamefield.before(result);
    if(userScore > comScore){
        let output = userScore - comScore;
        result.innerText = `You've won by ${output} points`;
    }else if(userScore < comScore){
        let output = comScore - userScore;
        result.innerText = `You've lost by ${output} points`;
    }
    else if(userScore == comScore){
        result.innerText = `Game draw.. ! Your score is ${userScore}`;
    }
    setTimeout(() => {
        result.remove();
    }, 3000);
})

rock.addEventListener("click",()=>{
    userReaction = "rock";
    gameReaction();
    setTimeout(() => {
        result()
    }, 100);
})

paper.addEventListener("click",()=>{
    userReaction = "paper";
    gameReaction();
    setTimeout(() => {
        result()
    }, 100);
})

scissor.addEventListener("click",()=>{
    userReaction = "scissor";
    gameReaction();
    setTimeout(() => {
        result()
    }, 100);
})

let reactions = ["rock","paper","scissor"];

function gameReaction(){
    let randIdx = Math.floor(Math.random()*3);
    comReaction = reactions[randIdx];
    console.log("Computer reaction = ",comReaction);
    console.log("User reaction = ",userReaction);
}
function result(){
    if(userReaction==comReaction){
        console.log("Ohh... game Draw. try again.....");
        console.log("Your score = ",userScore);
        console.log("Computer score = ",comScore);
        draw();
        //gameReset();
    }else if(userReaction=="rock" && comReaction=="paper"){
        console.log("You lost. try again...");
        comScore++;
        loss();
        //gameReset();
    }else if(userReaction=="paper" && comReaction=="scissor"){
        console.log("You lost. try again...");
        comScore++;
        loss();
        //gameReset();
    }
    else if(userReaction=="scissor" && comReaction=="rock"){
        console.log("You lost. try again...");
        comScore++;
        loss();
        //gameReset();
    }else if(userReaction=="rock" && comReaction=="scissor"){
        console.log("You won ...!!");
        userScore++;
        won();
        //gameReset();
    }else if(userReaction=="paper" && comReaction=="rock"){
        console.log("You won ...!!");
        userScore++;
        won();
        //gameReset();
    }else if(userReaction=="scissor" && comReaction=="paper"){
        console.log("You won ...!!");
        userScore++;
        won();
        //gameReset();
    }
    scoreHandelar();

}
function scoreHandelar(){
    yourScore.innerHTML = userScore;
    opponentScore.innerHTML = comScore;
}

function gameReset(){
    userReaction = "";
    comReaction = "";
    userScore = 0;
    comScore = 0;
    scoreHandelar();
    
}
function won(){
    let screenBg = document.querySelector("body");
    screenBg.classList.add("bg-green");
    setTimeout(() => {
        screenBg.classList.remove("bg-green");
    }, 110);
}

function loss(){
    let screenBg = document.querySelector("body");
    screenBg.classList.add("bg-red");
    setTimeout(() => {
        screenBg.classList.remove("bg-red");
    }, 110);
}
function draw(){
    let screenBg = document.querySelector("body");
    screenBg.classList.add("bg-white");
    setTimeout(() => {
        screenBg.classList.remove("bg-white");
    }, 110);
}