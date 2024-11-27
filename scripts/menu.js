const screen = window.matchMedia("(max-width: 320px");

document.getElementById("menu-icon").addEventListener("click", function () {
    var menu = document.getElementById("menuBurger");
    var currentTop = parseFloat(menu.style.top); // Convertir en nombre 

    if (screen.matches) {
        if (currentTop <= -700) {
            menu.style.top = '-377px';
            menu.style.transition = "top 0.6s ease";
        } else {
            menu.style.top = "-797px";
            menu.style.transition = "top 0.6s ease";
        }
    } else {
        if (currentTop <= -700) {
            menu.style.top = '-346px';
            menu.style.transition = "top 0.6s ease";
        } else {
            menu.style.top = "-738px";
            menu.style.transition = "top 0.6s ease";
        }
    }
}

);


