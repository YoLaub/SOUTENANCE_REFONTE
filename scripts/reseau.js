document.getElementById("shareDesktop").addEventListener("click", function () {

    var shareNet = document.getElementById("network");
    var blockShare = document.getElementById("shareDesktop");

        if (shareNet.style.display === "none") {
            blockShare.style.height="172px";
            setTimeout(() => {
                shareNet.style.display = "flex";
            }, 400);
            setTimeout(() => {
                shareNet.style.scale = "1";
            }, 450);
            
            
        } else {
            shareNet.style.display = "none";
            blockShare.style.height="60px";
            shareNet.style.scale = "0";
        }
});



