window.onload = function () {
    let wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", loseF);
    aWall = document.querySelectorAll(".boundary");
    Array.from(aWall).forEach(function(wall) {
        wall.addEventListener("mouseover", loseA)
    });
}

function loseF () {
    let wall1 = document.getElementById("boundary1");
    wall1.classList.add("youlose");
}

function loseA () {
    let walls = document.querySelectorAll(".boundary");
    document.querySelector(".boundary").addEventListener("mouseover", loseA);
    for (let i = 0; i < walls.length-1; i++) {
            walls[i].classList.add("youlose");
    }
}