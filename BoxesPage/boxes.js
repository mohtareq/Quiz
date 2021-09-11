function PopUp(){
    document.getElementById('popup-container').style.display="none"; 
    document.querySelectorAll('.scrollbar-hidden')[0].style.overflow = "auto"
}

for (let x = 0; x < 12; x++) {
    $(`#box-${x}`).click(function() {
        document.getElementById(`img-${x+1}`).src="../img/new/box-03.png";
    })
}
