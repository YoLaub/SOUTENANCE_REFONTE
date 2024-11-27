const collapseElementList = document.querySelectorAll(".collapse");
var element = collapseElementList[0];
var elementTow = collapseElementList[1];
var elementTree = collapseElementList[2];
var elementFour = collapseElementList[3];
var elementFive = collapseElementList[4];

document.getElementById("ecurie").addEventListener("click", function () {
  
  if(elementTow.className ==="accordion-collapse collapse show" || elementTree.className ==="accordion-collapse collapse show" || elementFour.className ==="accordion-collapse collapse show" || elementFive.className ==="accordion-collapse collapse show") {
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }else{
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }
});


document.getElementById("ferme").addEventListener("click", function () {
  
  if(element.className ==="accordion-collapse collapse show" || elementTree.className ==="accordion-collapse collapse show" || elementFour.className ==="accordion-collapse collapse show" || elementFive.className ==="accordion-collapse collapse show") {
    element.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }else{
    element.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }
});
document.getElementById("pedago").addEventListener("click", function () {
  
  if(elementTow.className ==="accordion-collapse collapse show" || element.className ==="accordion-collapse collapse show" || elementFour.className ==="accordion-collapse collapse show" || elementFive.className ==="accordion-collapse collapse show") {
    elementTow.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }else{
    elementTow.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }
});
document.getElementById("gallerie").addEventListener("click", function () {
  
  if(elementTow.className ==="accordion-collapse collapse show" || elementTree.className ==="accordion-collapse collapse show" || element.className ==="accordion-collapse collapse show" || elementFive.className ==="accordion-collapse collapse show") {
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }else{
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
    elementFive.className = "accordion-collapse collapse";
  }
});
document.getElementById("videos").addEventListener("click", function () {
  
  if(elementTow.className ==="accordion-collapse collapse show" || elementTree.className ==="accordion-collapse collapse show" || elementFour.className ==="accordion-collapse collapse show" || element.className ==="accordion-collapse collapse show") {
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
  }else{
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
  }
});


