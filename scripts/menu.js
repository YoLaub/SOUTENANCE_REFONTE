document.getElementById("menu-icon").addEventListener("click", function () {
    var menu = document.getElementById("menuBurger");
    var currentTop = parseFloat(menu.style.top) || -700; // Convertir en nombre ou utiliser une valeur par défaut

    if (currentTop >= -700) {
        menu.style.top = '-346px';
        menu.style.transition = "top 0.6s ease";
    } else {
        menu.style.top = "-732px";
        menu.style.transition = "top 0.6s ease";
    }

    document.getElementById("cross").addEventListener("click", function () {
        var currentTop = parseFloat(menu.style.top) || -258; // Convertir en nombre ou utiliser une valeur par défaut
    
        if (currentTop >= -346) {
            menu.style.top = "-732px";
            menu.style.transition = "top 0.6s ease";
        }
    });
});


