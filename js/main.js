'use strict'

var rulesBtn = document.getElementById("rules-btn");
var closeRulesIcon = document.getElementById("close-icon");
var paperBtn = document.getElementById("paper");
var rockBtn = document.getElementById("rock");
var scissorsBtn = document.getElementById("scissors");
var gameContainer = document.getElementById("game-container");
var houseSelection = document.getElementById("house-selection");
var mySelectionTitle = document.getElementById("my-selection-title");
var houseSelectionTitle = document.getElementById("house-selection-title");
var resultBox = document.getElementById("result-box");
var resultText = document.getElementById("result-txt");
var score = document.getElementById("actual-score");


let houseButtons = ["paper", "rock", "scissors"];

function reloadPage() {
    houseSelection.style.display = "none";
    mySelectionTitle.style.display = "none";
    houseSelectionTitle.style.display = "none";
    resultBox.style.display = "none";
    gameContainer.style.backgroundImage = "url(./images/bg-triangle.svg)";

    paperBtn.style.width = "136px";
    paperBtn.style.height = "136px";
    paperBtn.style.backgroundSize = "70px 70px";
    paperBtn.style.left = "110px";
    paperBtn.style.top = "50px";

    rockBtn.style.width = "136px";
    rockBtn.style.height = "136px";
    rockBtn.style.backgroundSize = "70px 70px";
    rockBtn.style.left = "250px";
    rockBtn.style.top = "286px";

    scissorsBtn.style.width = "136px";
    scissorsBtn.style.height = "136px";
    scissorsBtn.style.backgroundSize = "70px 70px";
    scissorsBtn.style.left = "375px";
    scissorsBtn.style.top = "50px";

    rockBtn.style.display = "block";
    scissorsBtn.style.display = "block";
    paperBtn.style.display = "block";

};
function showRules() {
    (document.getElementById("rules-window")).style.display = "block";
}
function closeRules() {
    (document.getElementById("rules-window")).style.display = "none";
}
rulesBtn.addEventListener('click', showRules);
closeRulesIcon.addEventListener('click', closeRules);

function randomButtons_paperSelected(min, max) {
    setTimeout(
        function () {
            var a = Math.floor(Math.random() * (max - min + 1) + min);
            var button = houseButtons[a];
            if (button == "paper") {
                var paperHouseBtn = document.createElement("div");
                paperHouseBtn.setAttribute("id", "paper-housebtn");
                houseSelection.appendChild(paperHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU TIED";
                var a=Number(score.innerHTML)+0;
                var b=a.toString();
                score.innerHTML=b;
                
            } else if (button == "rock") {
                var rockHouseBtn = document.createElement("div");
                rockHouseBtn.setAttribute("id", "rock-housebtn");
                houseSelection.appendChild(rockHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU WIN";
                var a=Number(score.innerHTML)+1;
                var b=a.toString();
                score.innerHTML=b;
                
            } else if (button == "scissors") {
                var scissorsHouseBtn = document.createElement("div");
                scissorsHouseBtn.setAttribute("id", "scissors-housebtn");
                houseSelection.appendChild(scissorsHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU LOSE";
                var a=Number(score.innerHTML)-1;
                var b=a.toString();
                score.innerHTML=b;  
            }
            houseSelection.style.display = "block";


        }, 1200);
};

function randomButtons_rockSelected(min, max) {
    setTimeout(
        function () {
            var a = Math.floor(Math.random() * (max - min + 1) + min);
            var button = houseButtons[a];
            if (button == "paper") {
                var paperHouseBtn = document.createElement("div");
                paperHouseBtn.setAttribute("id", "paper-housebtn");
                houseSelection.appendChild(paperHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU LOSE";
                var a=Number(score.innerHTML)-1;
                var b=a.toString();
                score.innerHTML=b; 
            } else if (button == "rock") {
                var rockHouseBtn = document.createElement("div");
                rockHouseBtn.setAttribute("id", "rock-housebtn");
                houseSelection.appendChild(rockHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU TIED";
                var a=Number(score.innerHTML)+0;
                var b=a.toString();
                score.innerHTML=b;
            } else if (button == "scissors") {
                var scissorsHouseBtn = document.createElement("div");
                scissorsHouseBtn.setAttribute("id", "scissors-housebtn");
                houseSelection.appendChild(scissorsHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU WIN";
                var a=Number(score.innerHTML)+1;
                var b=a.toString();
                score.innerHTML=b;
            }
            houseSelection.style.display = "block";
        }, 1200);
};

function randomButtons_scissorsSelected(min, max) {
    setTimeout(
        function () {
            var a = Math.floor(Math.random() * (max - min + 1) + min);
            var button = houseButtons[a];
            if (button == "paper") {
                houseSelection.style.display = "block";
                var paperHouseBtn = document.createElement("div");
                paperHouseBtn.setAttribute("id", "paper-housebtn");
                houseSelection.appendChild(paperHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU WIN";
                var a=Number(score.innerHTML)+1;
                var b=a.toString();
                score.innerHTML=b;
            } else if (button == "rock") {
                houseSelection.style.display = "block";
                var rockHouseBtn = document.createElement("div");
                rockHouseBtn.setAttribute("id", "rock-housebtn");
                houseSelection.appendChild(rockHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU LOSE";
                var a=Number(score.innerHTML)-1;
                var b=a.toString();
                score.innerHTML=b; 
            } else if (button == "scissors") {
                houseSelection.style.display = "block";
                var scissorsHouseBtn = document.createElement("div");
                scissorsHouseBtn.setAttribute("id", "scissors-housebtn");
                houseSelection.appendChild(scissorsHouseBtn);
                resultBox.style.display = "block";
                resultText.innerHTML = "YOU TIED";
                var a=Number(score.innerHTML)+0;
                var b=a.toString();
                score.innerHTML=b;
            }

        }, 1200);
};
function paperSelected() {
    rockBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    gameContainer.style.backgroundImage = "none";
    paperBtn.style.width = "200px";
    paperBtn.style.height = "200px";
    paperBtn.style.backgroundSize = "120px 120px";
    paperBtn.style.left = "-45px";
    paperBtn.style.top = "80px";
    mySelectionTitle.style.display = "block";
    houseSelectionTitle.style.display = "block";

    randomButtons_paperSelected(0, 2);
}
function rockSelected() {
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    gameContainer.style.backgroundImage = "none";
    rockBtn.style.width = "200px";
    rockBtn.style.height = "200px";
    rockBtn.style.backgroundSize = "120px 120px";
    rockBtn.style.left = "-45px";
    rockBtn.style.top = "80px";
    mySelectionTitle.style.display = "block";
    houseSelectionTitle.style.display = "block";
    randomButtons_rockSelected(0, 2);
}
function scissorsSelected() {
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    gameContainer.style.backgroundImage = "none";
    scissorsBtn.style.width = "200px";
    scissorsBtn.style.height = "200px";
    scissorsBtn.style.backgroundSize = "120px 120px";
    scissorsBtn.style.left = "-45px";
    scissorsBtn.style.top = "80px";
    mySelectionTitle.style.display = "block";
    houseSelectionTitle.style.display = "block";

    randomButtons_scissorsSelected(0, 2);
}





paperBtn.addEventListener('click', paperSelected);
rockBtn.addEventListener('click', rockSelected);
scissorsBtn.addEventListener('click', scissorsSelected);