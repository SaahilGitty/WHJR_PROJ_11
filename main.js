var count = 0;
var userName1 = "";
var userName2 = "";

function addUser() {
    userName1 = document.getElementById("p1").value;
    userName2 = document.getElementById("p2").value;

    localStorage.setItem("Player 1", userName1);
    localStorage.setItem("Player 2", userName2);

    window.location = "game.htm"
}


function update() {
    count++
    console.log(count);
    document.getElementById("score").innerHTML = "SCORE: " + count;
}

function save() {
    localStorage.setItem("Score", count);
    window.location = "point.htm"
}

