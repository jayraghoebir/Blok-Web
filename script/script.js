var madeFresh = document.getElementById("madefresh");

var handCrafted = document.getElementById("handcrafted");

var hotLight = document.getElementById("hotlight");

var menuKruis = document.getElementById("menukruis");

var hamburgerButton = document.getElementById("hamburgericon");

var nav = document.getElementById("navigation");

// madeFresh.addEventListener("mouseover", icon1hover)

// function icon1hover() {
//     img.src = '../img/home/Icon_Made_Fresh_Hover.png';
// }

hamburgerButton.addEventListener("click", active);
menuKruis.addEventListener("click", deactive);

menuKruis.addEventListener("mouseover", hoverKruis);
menuKruis.addEventListener("mouseout", hover2Kruis);

madeFresh.addEventListener("mouseover", hoverIcon1);
madeFresh.addEventListener("mouseout", hover2Icon1);

handCrafted.addEventListener("mouseover", hoverIcon2);
handCrafted.addEventListener("mouseout", hover2Icon2);

hotLight.addEventListener("mouseover", hoverIcon3);
hotLight.addEventListener("mouseout", hover2Icon3);


function active(){
    nav.classList.add("toonmenu");
}

function deactive(){
    nav.classList.remove("toonmenu");
}

function hoverKruis(){
    menuKruis.src = "img/home/menu-kruis-hover.svg";
}

function hover2Kruis(){
    menuKruis.src = "img/home/menu-kruis.svg";
}

function hoverIcon1(){
    madeFresh.src = "img/home/Icon_Made_Fresh_Hover.png";
}

function hover2Icon1(){
    madeFresh.src = "img/home/Icon_Made_Fresh.png";
}

function hoverIcon2(){
    handCrafted.src = "img/home/Icon_Hand_Crafted_Hover.png";
}

function hover2Icon2(){
    handCrafted.src = "img/home/Icon_Hand_Crafted.png";
}

function hoverIcon3(){
    hotLight.src = "img/home/Icon_Hotlight_Hover.png";
}

function hover2Icon3(){
    hotLight.src = "img/home/Icon_Hotlight.png";
}
