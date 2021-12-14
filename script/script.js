// Variabelen declareren
// Iconen
var madeFresh = document.getElementById("madefresh");

var handCrafted = document.getElementById("handcrafted");

var hotLight = document.getElementById("hotlight");

// Hamburger menu assets

var menuKruis = document.getElementById("menukruis");

var hamburgerButton = document.getElementById("hamburgericon");

// Navigatie

var nav = document.getElementById("navigation");

// Er wordt een eventlistener toegevoegd aan de functies active en deactive. De eventlistener die toegevoegd is, is een klik.
// Dat betekend dat als je klikt op de hamburger button wordt de functie active uitgevoerd en als je op de kruis in de uitgeklapte
// menu klikt gaat hij weer dicht.
hamburgerButton.addEventListener("click", active);
menuKruis.addEventListener("click", deactive);

// Er wordt een eventlistener toegevoegd aan de functies hoverkruis 1 en 2. Als je over de icons 
// hovert veranderd hij van icon. Van normaal wit naar donker groen.
menuKruis.addEventListener("mouseover", hoverKruis);
menuKruis.addEventListener("mouseout", hover2Kruis);

// Er wordt een evenlistener toegevoegd voor de iconen om het te veranderen van afbeelding. 
madeFresh.addEventListener("mouseover", hoverIcon1);
madeFresh.addEventListener("mouseout", hover2Icon1);

handCrafted.addEventListener("mouseover", hoverIcon2);
handCrafted.addEventListener("mouseout", hover2Icon2);

hotLight.addEventListener("mouseover", hoverIcon3);
hotLight.addEventListener("mouseout", hover2Icon3);


// functies worden hier aangemaakt en aangeroepen
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