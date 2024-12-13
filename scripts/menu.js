const screen = window.matchMedia("(max-width: 320px");

document.getElementById("menu-icon").addEventListener("click", function () {
    var menu = document.getElementById("menuBurger");
    var currentTop = parseFloat(menu.style.top); // Convertir en nombre 

    if (screen.matches) {
        if (currentTop <= -300) {
            menu.style.top = '0px';
            menu.style.transition = "top 0.6s ease";
        } else {
            menu.style.top = "-450px";
            menu.style.transition = "top 0.6s ease";
            
        }
    } else {
        if (currentTop <= -300) {
            menu.style.top = '0px';
            menu.style.transition = "top 0.6s ease";
        } else {
            menu.style.top = "-403px";
            menu.style.transition = "top 0.6s ease";
            
        }
    }
}

);



