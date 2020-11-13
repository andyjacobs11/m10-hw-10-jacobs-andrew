"use strict";

document.getElementById("boiling-temp").innerHTML = "212";
document.getElementById("freezing-temp").innerHTML = "32";
document.getElementById("water-temp").innerHTML = "300";

setTimeout(function () {
    document.getElementById("boiling").innerHTML = "The water is hot. I think it is boiling";
    node.getElementById("boiling").classList.remove(hide);
    node.getElementById("boiling").classList.add(show);
}, 3000);