const popUp =() => {
    document.getElementById('popup-container').style.display="none"; 
    document.querySelectorAll('.scrollbar-hidden')[0].style.overflow = "auto"
}

const borderColor = document.querySelector(":root");
const tryPop = () => {
    document.getElementById('fst-pop').style.display = "none";
    document.getElementById('snd-pop').style.display = "none";
    borderColor.style.setProperty("--border-color", '#3b5998');
}

const lastPop = () => {
    document.getElementById('thd-pop').style.display = "none";
    window.location.href = "../Qoustineer/index.html";
}

for (let x = 0; x < 12; x++) {
    var timesClicked = 0;

    $(`#box-${x}`).click(function() {
        document.getElementById(`img-${x}`).src="../img/new/box-03.png";

        timesClicked++;
        if (timesClicked == 1) {
            setTimeout(() => {
                document.getElementById('fst-pop').style.display = "block";
            }, 500)
            setTimeout(() => {
                document.querySelectorAll('.checkmark')[0].style.display = "block";
                borderColor.style.setProperty("--border-color", '#ff7800');
            }, 1000)
        }
        if (timesClicked == 2) {
            setTimeout(() => {
                document.getElementById('snd-pop').style.display = "block";
            }, 500)
            setTimeout(() => {
                document.querySelectorAll('.checkmark')[1].style.display = "block";
                borderColor.style.setProperty("--border-color", '#ff7800');
            }, 1000)
        }
        if (timesClicked == 3) {
            /*
            document.getElementById(`img-${x}`).style.display = "block";
            */
            document.getElementById(`gift-box-${x}`).style.display = "block";
            setTimeout(() => {
                document.getElementById('thd-pop').style.display = "block";
            }, 3000)
        }
    })
}

