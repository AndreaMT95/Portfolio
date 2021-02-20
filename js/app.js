let TOGGLE_MENU = false;


function burgermenu() {
    TOGGLE_MENU = !TOGGLE_MENU
    if(TOGGLE_MENU){
        document.getElementById("mymenu").style.display = "block"
    } else {
        document.getElementById("mymenu").style.display = "none"
    }
}


function otro() {
    alert("hola");
}