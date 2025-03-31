let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let startHomePoint = 0 
let startGuestPoint = 0


function addHomePoint (point){
    startHomePoint = startHomePoint + point
    homeScore.innerHTML = startHomePoint
}

function addGuestPoint (point){
    startGuestPoint = startGuestPoint + point
    guestScore.innerHTML = startGuestPoint
}

function reset() {
    startHomePoint = 0 
    startGuestPoint = 0
    homeScore.innerHTML = startHomePoint
    guestScore.innerHTML = startGuestPoint
}

