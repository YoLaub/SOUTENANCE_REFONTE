var stable = document.getElementById("stableMenu");
var farm = document.getElementById("farmMenu");
var pedago = document.getElementById("pedagoMenu");
var gallerie = document.getElementById("gallerieMenu");
var video = document.getElementById("videoMenu");

var stablePage = document.getElementById("stablePage");
var farmPage = document.getElementById("farmPage");
var pedagoPage = document.getElementById("pedagoPage");
var galleriePage = document.getElementById("galleriePage");
var videoPage = document.getElementById("videoPage");

var stableIcon = document.getElementById("stableActive");
var farmIcon = document.getElementById("farmActive");
var pedagoIcon = document.getElementById("pedagoActive");
var gallerieIcon = document.getElementById("gallerieActive");
var videoIcon = document.getElementById("videoActive");

farm.addEventListener("click", function () {
  if (farmPage.style.display = "none") {
    console.log("HEY")
    farmPage.style.display = "block";
    stablePage.style.display = "none";
    pedagoPage.style.display = "none";
    galleriePage.style.display = "none";
    videoPage.style.display = "none";
    farm.style.scale = "1.1";
    farmIcon.style.display = "inline-block";
    stable.style.scale = "1";
    stableIcon.style.display = "none";
    gallerie.style.scale = "1";
    gallerieIcon.style.display ="none";
    video.style.scale = "1";
    videoIcon.style.display = "none";
    pedago.style.scale = "1";
    pedagoIcon.style.display = "none";
    
  }

});

stable.addEventListener("click", function () {

  if (stablePage.style.display = "none") {
    console.log("HO")
    farmPage.style.display = "none";
    stablePage.style.display = "block";
    pedagoPage.style.display = "none";
    galleriePage.style.display = "none";
    videoPage.style.display = "none";
    farm.style.scale = "1";
    farmIcon.style.display = "none";
    stable.style.scale = "1.1";
    stableIcon.style.display = "inline-block";
    gallerie.style.scale = "1";
    gallerieIcon.style.display ="none";
    video.style.scale = "1";
    videoIcon.style.display = "none";
    pedago.style.scale = "1";
    pedagoIcon.style.display = "none";
  }

});

pedago.addEventListener("click", function () {

  if (pedagoPage.style.display = "none") {
    console.log("HI")
    farmPage.style.display = "none";
    stablePage.style.display = "none";
    pedagoPage.style.display = "block";
    galleriePage.style.display = "none";
    videoPage.style.display = "none";
    pedago.style.scale = "1.1";
    pedagoIcon.style.display = "inline-block";
    farm.style.scale = "1";
    farmIcon.style.display = "none";
    stable.style.scale = "1";
    stableIcon.style.display = "none";
    gallerie.style.scale = "1";
    gallerieIcon.style.display ="none";
    video.style.scale = "1";
    videoIcon.style.display = "none";
  }
});

gallerie.addEventListener("click", function () {

  if (galleriePage.style.display = "none") {
    console.log("HI")
    farmPage.style.display = "none";
    stablePage.style.display = "none";
    pedagoPage.style.display = "none" ;
    galleriePage.style.display = "grid";
    videoPage.style.display = "none";
    gallerie.style.scale = "1.1";
    gallerieIcon.style.display = "inline-block";
    video.style.scale = "1";
    videoIcon.style.display = "none";
    pedago.style.scale = "1";
    pedagoIcon.style.display = "none";
    farm.style.scale = "1";
    farmIcon.style.display = "none";
    stable.style.scale = "1";
    stableIcon.style.display = "none";
  }

});

video.addEventListener("click", function () {

  if (videoPage.style.display = "none") {
    console.log("HU")
    farmPage.style.display = "none";
    stablePage.style.display = "none";
    pedagoPage.style.display = "none" ;
    galleriePage.style.display = "none";
    videoPage.style.display = "grid";
    video.style.scale = "1.1";
    videoIcon.style.display = "inline-block";
    pedago.style.scale = "1";
    pedagoIcon.style.display = "none";
    farm.style.scale = "1";
    farmIcon.style.display = "none";
    stable.style.scale = "1";
    stableIcon.style.display = "none";
    gallerie.style.scale = "1";
    gallerieIcon.style.display ="none";
  }

});

