window.onload = function () {    
    let wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", loseF);

    aWall = document.querySelectorAll(".boundary");
    Array.from(aWall).forEach(function(wall) { //runs loseA once one of the five walls is touched
        wall.addEventListener("mouseover", loseA)
    });
    
    let end = document.getElementById("end");
    end.addEventListener("mouseover", win);

    let start = document.getElementById("start");
    start.addEventListener("click", reset); //game restarts on click of S
}

let touch = false; //keeps track of wall touches during game

function loseF () { //loss as a result of touching the first wall
    let wall1 = document.getElementById("boundary1");
    wall1.classList.add("youlose");
    touch = true;
}

function loseA () { //loss as a result of touching any walls
    let walls = document.querySelectorAll(".boundary");
    document.querySelector(".boundary").addEventListener("mouseover", loseA);
    for (let i = 0; i < walls.length-1; i++) {
            walls[i].classList.add("youlose");
    }
    touch = true;
    alert("You lose!");
}

function win () {
    if (touch === false) {
        alert("You win!");  
    }
}

function reset () { //resets game to initial values so user can try again
    let walls = document.querySelectorAll(".boundary");
    document.querySelector(".boundary").addEventListener("mouseover", loseA);
    for (let i = 0; i < walls.length-1; i++) {
            walls[i].classList.remove("youlose");
    }
}