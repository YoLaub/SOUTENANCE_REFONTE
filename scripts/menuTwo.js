document.getElementById("hookMenu").addEventListener("click", function () {
    var miniMenu = document.getElementById("menuTwo");
    var blockMenu = document.getElementById("hookMenu");


    if (miniMenu.style.display === "none") {
        miniMenu.style.display = "flex";
        blockMenu.style.maxWidth = "240px";
        setTimeout(() => {
            miniMenu.style.opacity = "1";
        }, 50);
        
    } else {
        miniMenu.style.display = "none"
        blockMenu.style.maxWidth = "150px";
        miniMenu.style.opacity = "0";
    }
});



