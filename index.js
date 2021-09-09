const newQuote = () => {
    document.getElementById(`text`).innerHTML = "Are you over 18 to enter our competition?";
    document.getElementById(`dot3`).style.background = "yellow";
    document.getElementById(`dot1`).style.background = "white";
}

var timesClicked = 0;

$("#yesButton").click(function() {
    timesClicked++;

    if (timesClicked > 1) {
        return window.location.href = "http://127.0.0.1:5500/boxes/index.html";
    }
})

$("#noButton").click(function() {
    timesClicked++;

    if (timesClicked > 1) {
        return window.location.href = "http://127.0.0.1:5500/boxes/index.html";
    }
})