function sendUser() {
    player1_name=document.getElementById("player1Input").value;
    player2_name=document.getElementById("player2Input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    console.log(player1_name);
    console.log(player2_name);
    window.location="gamePage.html";
    console.log("Next Page Transfer Success");
}