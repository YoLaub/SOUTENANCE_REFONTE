const screen2 = window.matchMedia("(max-width: 728px");

document.getElementById("iconeHeader")
    .addEventListener("click", function () {

        let phone = document.getElementById("iconeHeader");
        let container = document.getElementById("telephone");
        let information = document.getElementById('contactHeader');


        if (information.style.display === "none") {
            information.style.display = "block";
            phone.style.marginRight = "24px";
            container.style.padding = "4px 16px";
        } else {
            information.style.display = "none";
            phone.style.marginRight = "0px";
            container.style.padding = "4px 11px";
        }

        

    })

