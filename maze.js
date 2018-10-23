window.onload = function () {    
    let wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", loseF);

    aWall = document.querySelectorAll(".boundary");
    Array.from(aWall).forEach(function(wall) { //runs loseA once any one of the five walls is touched i.e checking if any wall was touched
        wall.addEventListener("mouseover", loseA)
    });
    
    let end = document.getElementById("end");
    end.addEventListener("mouseover", win);

    let start = document.getElementById("start");
    start.addEventListener("click", reset); //game restarts on click of S

    let maze = document.getElementById("maze");
    maze.addEventListener("mouseleave", loseA);
}

let gameOn = false; //checks whether user has clicked 'S' to start the game N.B. nothing happens until this is done i.e gameOn is true
let touch = false; //keeps track of wall touches during game
let status = document.getElementById("status");

function loseF () { //loss as a result of touching the first wall
    if (gameOn === true) {
        let wall1 = document.getElementById("boundary1");
        wall1.classList.add("youlose");
        touch = true;
        document.getElementById("status").innerHTML = "You lose!";
    }
}

function loseA () { //loss as a result of touching any walls
    if (gameOn === true) {
        let walls = document.querySelectorAll(".boundary");
        document.querySelector(".boundary").addEventListener("mouseover", loseA);
        for (let i = 0; i < walls.length-1; i++) {
                walls[i].classList.add("youlose");
        }
        touch = true;
        document.getElementById("status").innerHTML = "You lose!";
    }
}

function win () {
    if (gameOn === true) {
        if (touch === false) {
            document.getElementById("status").innerHTML = "You win!";  
        }
    }
}

function reset () { //resets game to initial values so user can try again
    let walls = document.querySelectorAll(".boundary");
    document.querySelector(".boundary").addEventListener("mouseover", loseA);
    for (let i = 0; i < walls.length-1; i++) {
        walls[i].classList.remove("youlose");
    }
    touch = false;
    gameOn = true;
    document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.';
}