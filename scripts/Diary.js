var stable = document.getElementById("stableMenu");
var newStable = stable.style;
var initialStyleStable = newStable ;

//initialisation du style de stable
stable.style.scale = "1.1";
stable.style.backgroundColor = "#B8B66A";
stable.style.borderRadius = "0 5px 5px 0";
stable.style.paddingLeft = "16px";
stable.style.boxShadow = "0 5px 10px";

var farm = document.getElementById("farmMenu");
var initialStyleFarm = farm.style;
var pedago = document.getElementById("pedagoMenu");
var initialStylePedago = pedago.style;
var gallerie = document.getElementById("gallerieMenu");
var initialStyleGallerie = gallerie.style;
var video = document.getElementById("videoMenu");
var initialStyleVideo = video.style;

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
    farmPage.style.display = "block";
    stablePage.style.display = "none";
    pedagoPage.style.display = "none";
    galleriePage.style.display = "none";
    videoPage.style.display = "none";

    farm.style.scale = "1.1";
    farm.style.backgroundColor = "#B8B66A";
    farm.style.borderRadius = "0 5px 5px 0";
    farm.style.paddingLeft = "16px";
    farm.style.boxShadow = "0 5px 10px";

    gallerie.style = initialStyleGallerie;
    video.style = initialStyleVideo;
    pedago.style = initialStylePedago;
    stable.style = initialStyleStable;

    farmIcon.style.display = "inline-block";
    stableIcon.style.display = "none";
    gallerieIcon.style.display = "none";
    videoIcon.style.display = "none";
    pedagoIcon.style.display = "none";

  }

});

stable.addEventListener("click", function () {

  if (stablePage.style.display = "none") {
    farmPage.style.display = "none";
    stablePage.style.display = "block";
    pedagoPage.style.display = "none";
    galleriePage.style.display = "none";
    videoPage.style.display = "none";

    farmIcon.style.display = "none"
    stableIcon.style.display = "inline-block";
    gallerieIcon.style.display = "none";
    pedagoIcon.style.display = "none";
    videoIcon.style.display = "none";


    stable.style.scale = "1.1";
    stable.style.backgroundColor = "#B8B66A";
    stable.style.borderRadius = "0 5px 5px 0";
    stable.style.paddingLeft = "16px";
    stable.style.boxShadow = "0 5px 10px";


    gallerie.style = initialStyleGallerie;
    video.style = initialStyleVideo;
    pedago.style = initialStylePedago;
    farm.style = initialStyleFarm;

  }

});

pedago.addEventListener("click", function () {

  if (pedagoPage.style.display = "none") {
    farmPage.style.display = "none";
    stablePage.style.display = "none";
    pedagoPage.style.display = "block";
    galleriePage.style.display = "none";
    videoPage.style.display = "none";

    pedago.style.scale = "1.1";
    pedago.style.backgroundColor = "#B8B66A";
    pedago.style.borderRadius = "0 5px 5px 0";
    pedago.style.paddingLeft = "16px";
    pedago.style.boxShadow = "0 5px 10px";

    gallerie.style = initialStyleGallerie;
    video.style = initialStyleVideo;
    stable.style = initialStyleStable;
    farm.style = initialStyleFarm;

    pedagoIcon.style.display = "inline-block";
    farmIcon.style.display = "none";
    stableIcon.style.display = "none";
    gallerieIcon.style.display = "none";
    videoIcon.style.display = "none";
  }
});

gallerie.addEventListener("click", function () {

  if (galleriePage.style.display = "none") {
    farmPage.style.display = "none";
    stablePage.style.display = "none";
    pedagoPage.style.display = "none";
    galleriePage.style.display = "grid";
    videoPage.style.display = "none";

    gallerie.style.scale = "1.1";
    gallerie.style.backgroundColor = "#B8B66A";
    gallerie.style.borderRadius = "0 5px 5px 0";
    gallerie.style.paddingLeft = "16px";
    gallerie.style.boxShadow = "0 5px 10px";

    pedago.style = initialStylePedago;
    video.style = initialStyleVideo;
    stable.style = initialStyleStable;
    farm.style = initialStyleFarm;

    gallerieIcon.style.display = "inline-block";
    videoIcon.style.display = "none";
    pedagoIcon.style.display = "none";
    farmIcon.style.display = "none";
    stableIcon.style.display = "none";
  }

});

video.addEventListener("click", function () {

  if (videoPage.style.display = "none") {
    farmPage.style.display = "none";
    stablePage.style.display = "none";
    pedagoPage.style.display = "none";
    galleriePage.style.display = "none";
    videoPage.style.display = "grid";

    video.style.scale = "1.1";
    video.style.backgroundColor = "#B8B66A";
    video.style.borderRadius = "0 5px 5px 0";
    video.style.paddingLeft = "16px";
    video.style.boxShadow = "0 5px 10px";

    pedago.style = initialStylePedago;
    gallerie.style = initialStyleGallerie;
    stable.style = initialStyleStable;
    farm.style = initialStyleFarm;

    videoIcon.style.display = "inline-block";
    pedagoIcon.style.display = "none";
    farmIcon.style.display = "none";
    stableIcon.style.display = "none";
    gallerieIcon.style.display = "none";
  }

});

