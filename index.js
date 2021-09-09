// Js
let quotes = [
"Are you over 18 to enter our competition?"
];

let color = [
    "yellow"
];

let removedcolor = [
    "white"
];



function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * quotes.length);
    let randomRemovedcolor = Math.floor(Math.random() * quotes.length);
    document.getElementById(`text`).innerHTML = quotes[randomNumber];
    document.getElementById(`dot3`).style.background = color[randomColor];
    document.getElementById(`dot1`).style.background = removedcolor[randomRemovedcolor];
}
