function PopUp(){
    document.getElementById('popup-container').style.display="none"; 
    document.querySelectorAll('.scrollbar-hidden')[0].style.overflow = "auto"
}

/*
@media (max-width: 320px) {
  .header-flex {
    padding: 10px;
  }
  
  .header-logo {
    width: 100px;
  }
  .popup-div {
    width: 280px;
    margin: 10px 5px;
  }
}

@media (max-width: 375px) {
  .header-flex {
    padding: 10px;
  }
  
  .header-logo {
    width: 100px;
  }

  .popup-div {
    width: 320px;
    margin: 10px 10px;
  }
}

@media (max-width: 425px) {
  .header-flex {
    padding: 15px;
  }
  
  .header-logo {
    width: 130px;
  }
}

*/