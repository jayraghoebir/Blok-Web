// Variabelen declareren

// Hamburger menu assets

var menuKruis = document.getElementById("menukruis");

var hamburgerButton = document.getElementById("hamburgerbutton");

var nav = document.querySelector("nav");

// Er worden eventlisteners toegevoegd bij de buttons dat als je erop klikt can voeren
// de functies zich uit.
hamburgerButton.addEventListener("click", active);
menuKruis.addEventListener("click", deactive);

// functies worden hier aangemaakt en aangeroepen
function active(){
    nav.classList.add("toonmenu");
}

function deactive(){
    nav.classList.remove("toonmenu");
}
