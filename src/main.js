const freezingTemp = 32;
const currentTemp = 89;
const boilingTemp = 212;

document.getElementById("boiling-temp").innerHTML = boilingTemp;
document.getElementById("freezing-temp").innerHTML = freezingTemp;
document.getElementById("water-temp").innerHTML = currentTemp;


if(boilingTemp < currentTemp){
    setTimeout(function showBoil(){
        document.getElementById("boiling").innerHTML = "The water is hot. I think it is boiling";
        document.getElementById("boiling").classList.remove("hide");
        document.getElementById("boiling").classList.add("show");
    }, 3000);
}

if (currentTemp < freezingTemp) {
    setTimeout(function showFrozen(){
        document.getElementById("frozen").classList.remove("hide");
        document.getElementById("frozen").classList.add("show");
    }, 3000);
}

if (freezingTemp < currentTemp && currentTemp < boilingTemp){
    setTimeout(function showGoodTemp(){
        document.getElementById("good-temp").classList.remove("hide");
        document.getElementById("good-temp").classList.add("show");
    }, 3000);
}
