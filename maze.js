window.onload = function () {
    var gameOn = true;
    var wall1 = document.getElementById("boundary1");
    var walls = document.getElementsByClassName(".boundary");
    

    wall1.addEventListener("mouseover", loseF);
    //wall1.addEventListener("mouseout", function (){wall1.style.background = "#eee"});  
}

function loseF () {
    var wall1 = document.getElementById("boundary1");
    wall1.classList.add("youlose");
}