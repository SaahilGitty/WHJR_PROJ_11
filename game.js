var score1 = 0;
var score2 = 0;
var turn = "Player 1";
var underscores = "________________________________________________________________________________________"

var sendInput = document.getElementById("sendInput");

function get() {
    document.getElementById("p1score").innerHTML =  localStorage.getItem("Player 1") + " -" + score1;
    document.getElementById("p2score").innerHTML =  localStorage.getItem("Player 2") + " -" + score2;
}

function submitWord() {
    word = sendInput.value;

    if (word.length < 3) {
    document.getElementById("playerQuestion").innerHTML = word.substring(0, 1) + underscores.substring(0, word.length - 1);
    }  if (word.length > 5) {
        document.getElementById("playerQuestion").innerHTML = word.substring(0, 2) + underscores.substring(0, word.length - 1);
    }  if (word.length > 7) {
        document.getElementById("playerQuestion").innerHTML = word.substring(0, 3) + underscores.substring(0, word.length - 1);
    }  if (word.length > 9) {
        document.getElementById("playerQuestion").innerHTML = word.substring(0, 4) + underscores.substring(0, word.length - 1);
    }  if (word.length == 11) {
        document.getElementById("playerQuestion").innerHTML = word.substring(0, 5) + underscores.substring(0, word.length - 1);
    }  if(word.length > 11) {
        document.getElementById("playerQuestion").innerHTML = word.substring(0, 8) + underscores.substring(0, word.length - 1);
    }
    
    if (turn === "Player 1") {
        turn = "Player 2";
        alert('Now, ' + localStorage.getItem("Player 1") + ", try to guess the word that " + localStorage.getItem("Player 2") + " thought of!");
    
    }  {
        turn = "Player 1";
        alert('Now, ' + localStorage.getItem("Player 2") + ", try to guess the word that " + localStorage.getItem("Player 1") + " thought of!");
    }
}