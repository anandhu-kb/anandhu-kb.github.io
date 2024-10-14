// document.getElementById("start").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("hr").innerHTML += "Moused over!<br>";
// }

window.addEventListener("load", function () {
    document.getElementById("start").addEventListener("click", startFunction);
    document.getElementById("stop").addEventListener("click", stopFunction);

    function startFunction() {
        document.getElementById("message").innerHTML = "Start";
    }

    function stopFunction() {
        document.getElementById("message").innerHTML = "Stop!<br>";
    }
});
