document.getElementById("menu-icon").addEventListener("click", function(){
    var menu = document.getElementById("menuBurger");
    if (menu.style.left === "-413px"){
        menu.style.left = '0px'
        menu.style.transition= " left 0.6s ease"
    }else{
        menu.style.left="-413px"
    }

})