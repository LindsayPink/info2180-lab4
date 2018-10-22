window.onload = function () {
    var wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", loseF);
}

function loseF () {
    var wall1 = document.getElementById("boundary1");
    wall1.classList.add("youlose");
}