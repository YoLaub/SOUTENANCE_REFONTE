const screen=window.matchMedia("(max-width: 320px");document.getElementById("menu-icon").addEventListener("click",function(){var b=document.getElementById("menuBurger");var a=parseFloat(b.style.top);if(screen.matches){if(a<=-300){b.style.top="0px";b.style.transition="top 0.6s ease"}else{b.style.top="-450px";b.style.transition="top 0.6s ease"}}else{if(a<=-300){b.style.top="0px";b.style.transition="top 0.6s ease"}else{b.style.top="-403px";b.style.transition="top 0.6s ease"}}});