let menu = document.getElementById("button");
let header = document.getElementsByTagName("header")[0];

function draai(){
    menu.classList.toggle("rotated");
    header.classList.toggle("header_lower");
}

menu.onclick = draai