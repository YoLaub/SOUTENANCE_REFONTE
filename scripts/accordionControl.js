const collapseElementList = document.querySelectorAll(".collapse");
const elementClassList = document.querySelectorAll(".collapsed");


var element = collapseElementList[0];
var elementTow = collapseElementList[1];
var elementTree = collapseElementList[2];
var elementFour = collapseElementList[3];
var elementFive = collapseElementList[4];

var elementClass = elementClassList[0];
var elementClassTwo = elementClassList[1];
var elementClassThree = elementClassList[2];
var elementClassFour = elementClassList[3];
var elementClassFive = elementClassList[4];

document.getElementById("ecurie").addEventListener("click", function () {

  console.log(elementClassList);
  
  if(elementTow.className ==="accordion-collapse collapse show" || elementTree.className ==="accordion-collapse collapse show" || elementFour.className ==="accordion-collapse collapse show" || elementFive.className ==="accordion-collapse collapse show") {

    elementTow.className = "accordion-collapse collapse";
    elementClassTwo.className = "accordion-button collapsed";
    elementTree.className = "accordion-collapse collapse";
    elementClassThree.className = "accordion-button collapsed";
    elementFour.className = "accordion-collapse collapse";
    elementClassFour.className = "accordion-button collapsed";
    elementFive.className = "accordion-collapse collapse";
    elementClassFive.className = "accordion-button collapsed";
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
    elementClass.className = "accordion-button collapsed";
    elementClassThree.className = "accordion-button collapsed";
    elementClassFour.className = "accordion-button collapsed";
    elementClassFive.className = "accordion-button collapsed";
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
    elementClass.className = "accordion-button collapsed";
    elementClassTwo.className = "accordion-button collapsed";
    elementClassFour.className = "accordion-button collapsed";
    elementClassFive.className = "accordion-button collapsed";
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
    elementClass.className = "accordion-button collapsed";
    elementClassThree.className = "accordion-button collapsed";
    elementClassTwo.className = "accordion-button collapsed";
    elementClassFive.className = "accordion-button collapsed";
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
    elementClass.className = "accordion-button collapsed";
    elementClassThree.className = "accordion-button collapsed";
    elementClassTwo.className = "accordion-button collapsed";
    elementClassFour.className = "accordion-button collapsed";
  }else{
    elementTow.className = "accordion-collapse collapse";
    elementTree.className = "accordion-collapse collapse";
    elementFour.className = "accordion-collapse collapse";
    element.className = "accordion-collapse collapse";
  }
});


