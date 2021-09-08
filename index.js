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

/*
@media (min-width: 375px) {

    body {
        box-sizing: border-box;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        color: #fff;
        min-height: 100vh;
        margin: auto;
    }

    .payment {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        justify-content: center;
        width: 200px;
        height: 150px;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        margin-left: 20%;
    }
    p {
        display: block;
        padding-top: 10px;
    }
    
    .header {
        font-family: 'Yandex Sans medium';
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
    
    .header-txt{
        font-size: 13px;
        font-weight: 100;
        font-family: 'Yandex Sans light';
        margin-bottom: 15px;
        text-align: center;
        color: white;
        margin: auto 10px;
    }
    
    .dots {
        text-align: center;
        margin-bottom: 5px;
    }
    
    .dot1 {
        height: 10px;
        width: 10px;
        background-color: yellow;
        border-radius: 50%;
        display: inline-block;
    }
    
    .dot2, .dot3, .dot4 {
        height: 10px;
        width: 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    
    .question {
        font-size: 18px;
        margin: auto 10px;
        font-family: 'Yandex Sans light';
        margin-bottom: 2.4rem;
        font-weight: 700;
        text-align: center;
        color: white;
    }
    
    .buttons {
        display: flex;
        margin-left: 20%;
        padding-bottom: 300px;
    }
    
    .button {
        font-family: 'Yandex Sans bold';
        font-size: 14px;
        color: #151515;
        font-weight: 700;
        border-radius: 28px;
        background-color: #fff;
        padding: 8px 25px 8px 25px;
        border: none;
        text-align: center;
        margin: auto 15px;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        -ms-border-radius: 28px;
        -o-border-radius: 28px;
    }
    
    .button:hover{
        background-color: yellow;
    }
    
    .button:focus{
        background-color: yellow;
    }
    
    .footer-para {
        text-align: center;
        font-size: 14px;
        margin: auto 15px;
    }
}

@media (min-width: 425px) {

    body {
        box-sizing: border-box;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        color: #fff;
        min-height: 100vh;
        margin: auto;
    }

    .payment {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        justify-content: center;
        width: 250px;
        height: 150px;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        margin-left: 20%;
    }
    p {
        display: block;
        padding-top: 10px;
    }
    
    .header {
        font-family: 'Yandex Sans medium';
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
    
    .header-txt{
        font-size: 16px;
        margin: auto 10px;
        font-weight: 100;
        font-family: 'Yandex Sans light';
        margin-bottom: 15px;
        text-align: center;
        color: white;
    }
    
    .dots {
        text-align: center;
        margin-bottom: 5px;
    }
    
    .dot1 {
        height: 15px;
        width: 15px;
        background-color: yellow;
        border-radius: 50%;
        display: inline-block;
    }
    
    .dot2, .dot3, .dot4 {
        height: 15px;
        width: 15px;
        margin: auto 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    
    .question {
        font-size: 18px;
        margin: auto 10px;
        font-family: 'Yandex Sans light';
        margin-bottom: 2.4rem;
        font-weight: 700;
        text-align: center;
        color: white;
    }
    
    .buttons {
        display: flex;
        margin-left: 25%;
        padding-bottom: 300px;
    }
    
    .button {
        font-family: 'Yandex Sans bold';
        font-size: 14px;
        color: #151515;
        font-weight: 700;
        border-radius: 28px;
        background-color: #fff;
        padding: 8px 25px 8px 25px;
        border: none;
        text-align: center;
        margin: auto 15px;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        -ms-border-radius: 28px;
        -o-border-radius: 28px;
    }
    
    .button:hover{
        background-color: yellow;
    }
    
    .button:focus{
        background-color: yellow;
    }
    
    .footer-para {
        text-align: center;
        font-size: 14px;
    }
}


@media (min-width: 768px) {

    body {
        box-sizing: border-box;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        color: #fff;
        min-height: 100vh;
        margin: auto;
    }

    .payment {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        justify-content: center;
        width: 300px;
        height: 200;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        margin-left: 30%;
    }
    p {
        display: block;
        padding-top: 15px;
    }
    
    .header {
        font-family: 'Yandex Sans medium';
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
    
    .header-txt{
        font-size: 16px;
        margin: auto 10px;
        font-weight: 100;
        font-family: 'Yandex Sans light';
        margin-bottom: 15px;
        text-align: center;
        color: white;
    }
    
    .dots {
        text-align: center;
        margin-bottom: 5px;
    }
    
    .dot1 {
        height: 15px;
        width: 15px;
        background-color: yellow;
        border-radius: 50%;
        display: inline-block;
    }
    
    .dot2, .dot3, .dot4 {
        height: 15px;
        width: 15px;
        margin: auto 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    
    .question {
        font-size: 22px;
        margin: auto 10px;
        font-family: 'Yandex Sans light';
        margin-bottom: 2.4rem;
        font-weight: 700;
        text-align: center;
        color: white;
    }
    
    .buttons {
        display: flex;
        margin-left: 37%;
        padding-bottom: 300px;
    }
    
    .button {
        font-family: 'Yandex Sans bold';
        font-size: 14px;
        color: #151515;
        font-weight: 700;
        border-radius: 28px;
        background-color: #fff;
        padding: 8px 25px 8px 25px;
        border: none;
        text-align: center;
        margin: auto 15px;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        -ms-border-radius: 28px;
        -o-border-radius: 28px;
    }
    
    .button:hover{
        background-color: yellow;
    }
    
    .button:focus{
        background-color: yellow;
    }
    
    .footer-para {
        text-align: center;
        font-size: 14px;
        margin: auto 15px;
    }
}

@media (min-width: 1024px) {

    body {
        box-sizing: border-box;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        color: #fff;
        min-height: 100vh;
        margin: auto;
    }

    .payment {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        justify-content: center;
        width: 350px;
        height: 280px;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        margin-left: 34%;
    }
    p {
        display: block;
        padding-top: 15px;
    }
    
    .header {
        font-family: 'Yandex Sans medium';
        font-size: 22px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
    
    .header-txt{
        font-size: 16px;
        margin: auto 10px;
        font-weight: 100;
        font-family: 'Yandex Sans light';
        margin-bottom: 15px;
        text-align: center;
        color: white;
    }
    
    .dots {
        text-align: center;
        margin-bottom: 5px;
    }
    
    .dot1 {
        height: 12px;
        width: 12px;
        background-color: yellow;
        border-radius: 50%;
        display: inline-block;
    }
    
    .dot2, .dot3, .dot4 {
        height: 12px;
        width: 12px;
        margin: auto 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    
    .question {
        font-size: 22px;
        margin: auto 10px;
        font-family: 'Yandex Sans light';
        margin-bottom: 2.4rem;
        font-weight: 700;
        text-align: center;
        color: white;
    }
    
    .buttons {
        display: flex;
        margin-left: 40%;
        padding-bottom: 300px;
    }
    
    .button {
        font-family: 'Yandex Sans bold';
        font-size: 14px;
        color: #151515;
        font-weight: 700;
        border-radius: 28px;
        background-color: #fff;
        padding: 8px 25px 8px 25px;
        border: none;
        text-align: center;
        margin: auto 15px;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        -ms-border-radius: 28px;
        -o-border-radius: 28px;
    }
    
    .button:hover{
        background-color: yellow;
    }
    
    .button:focus{
        background-color: yellow;
    }
    
    .footer-para {
        text-align: center;
        font-size: 14px;
        margin: auto 15px;
        padding-bottom: 20px;
    }
}

@media (min-width: 1440px) {

    body {
        box-sizing: border-box;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        color: #fff;
        min-height: 100vh;
        margin: auto;
    }

    .payment {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        justify-content: center;
        width: 400px;
        height: 320px;
        background: rgb(204,7,48);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        margin-left: 36%;
    }
    p {
        display: block;
        padding-top: 20px;
    }
    
    .header {
        font-family: 'Yandex Sans medium';
        font-size: 22px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
    
    .header-txt{
        font-size: 18px;
        margin: auto 10px;
        font-weight: 100;
        font-family: 'Yandex Sans light';
        margin-bottom: 15px;
        text-align: center;
        color: white;
    }
    
    .dots {
        text-align: center;
        margin-bottom: 5px;
    }
    
    .dot1 {
        height: 14px;
        width: 14px;
        background-color: yellow;
        border-radius: 50%;
        display: inline-block;
    }
    
    .dot2, .dot3, .dot4 {
        height: 14px;
        width: 14px;
        margin: auto 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    
    .question {
        font-size: 24px;
        margin: auto 10px;
        font-family: 'Yandex Sans light';
        margin-bottom: 2.4rem;
        font-weight: 700;
        text-align: center;
        color: white;
    }
    
    .buttons {
        display: flex;
        margin-left: 43%;
        padding-bottom: 300px;
    }
    
    .button {
        font-family: 'Yandex Sans bold';
        font-size: 16px;
        color: #151515;
        font-weight: 700;
        border-radius: 28px;
        background-color: #fff;
        padding: 8px 25px 8px 25px;
        border: none;
        text-align: center;
        margin: auto 15px;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        -ms-border-radius: 28px;
        -o-border-radius: 28px;
    }
    
    .button:hover{
        background-color: yellow;
    }
    
    .button:focus{
        background-color: yellow;
    }
    
    .footer-para {
        text-align: center;
        font-size: 14px;
        margin: auto 15px;
        padding-bottom: 20px;
    }
}
*/