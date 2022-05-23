console.log("default var");
question_turn="player1";
console.log(question_turn);
answer_turn ="player2";
console.log(answer_turn);
player1_score=0;
console.log(player1_score);
player2_score=0;
console.log(player2_score);
player1_name=localStorage.getItem("player1_name");
console.log(player1_name);
player2_name=localStorage.getItem("player2_name");
console.log(player2_name);
function load() {
    document.getElementById("player1Name").innerHTML=player1_name;
    document.getElementById("player2Name").innerHTML=player2_name;
    document.getElementById("questionTurn").innerHTML=player1_name;
    document.getElementById("answerTurn").innerHTML=player2_name;
}
function startGame() {
    number1=document.getElementById("number1").value;
    console.log(number1);
    number2=document.getElementById("number2").value;
    console.log(number2);
    answer=number1*number2;
    console.log(answer);
    equation="<h4>"+number1+"X"+number2+"</h4>";
    console.log("equation");
    input_box="<br>Answer : <input type='text' id='checkInput'>";
    console.log("input_box");
    check_button="<br><br><button id='checkButton' class='btn btn-outline-info' onclick='check()'>Check</button>";
    console.log("check_button");
    column=equation+input_box+check_button;
    console.log("column");
    console.log("check column visible");
    document.getElementById("questionBox").innerHTML=column;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("numberBox").innerHTML="";
    document.getElementById("startGameButtonBox").innerHTML="";
    console.log("numberBox hidden");
    console.log("startGameButtonBox hidden");
    console.log("question framing box hidden");
}
function check() {
    user_entered_answer=document.getElementById("checkInput").value;
    if(answer==user_entered_answer) {
        if(answer_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById("player1Score").innerHTML=player1_score;
            console.log("player1Score="+player1_score);
        }
        else {
            player2_score=player2_score+1;
            document.getElementById("player2Score").innerHTML=player2_score;
            console.log("player2Score="+player2_score);
        }
    }
    if(question_turn=="player1") {
        question_turn="player2";
        document.getElementById("questionTurn").innerHTML=player2_name;
        console.log("question turn="+question_turn);
    }
    else {
        question_turn="player1";
        document.getElementById("questionTurn").innerHTML=player1_name;
        console.log("question turn="+question_turn);
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
        document.getElementById("answerTurn").innerHTML=player2_name;
        console.log("question turn="+answer_turn);
    }
    else {
        answer_turn="player1";
        document.getElementById("answerTurn").innerHTML=player1_name;
        console.log("question turn="+answer_turn);
    }
    document.getElementById("questionBox").innerHTML="";
    console.log("questionBox hidden");
    document.getElementById("numberBox").innerHTML="<br><div class='numbers' id='number1Box'><label>Number 1 - </label><br><input type='text' id='number1' placeholder='Number 1'></div><br><div class='numbers' id='number2Box'><label>Number 2 - </label><br><input type='text' id='number2' placeholder='Number 2'></div>";
    console.log("numberBox visible");
    document.getElementById("startGameButtonBox").innerHTML="<button type='button' class='btn btn-outline-info' id='startGameButton' onclick='startGame()'>Start!</button>";
    console.log("startGameButtonBox visible");
}