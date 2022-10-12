//Hamburger menu
function Hamburger(nodeName) {
  let myNode = document.querySelector(nodeName + " .hamburger");

  return {
    activate: () =>
      myNode.addEventListener(
        "click",
        (e) =>
          myNode.parentNode.querySelector(".navbar").classList.toggle("hidden"),
        false
      ), //activate
  }; //return
} //Hamburger

let topMenu = new Hamburger("#topMenu");
topMenu.activate();

//Icon slider
("use strict");
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

var timeOutId;
// showSlides(slideIndex);
function plusDivs(n) {
  showSlides((slideIndex += n));
}

var timer;
function showSlides(n) {
  /* the code */
  if (timer) clearTimeout(timer);
  timer = setTimeout(showSlides, 8000);
}

function showSlides(n) {
  // Stop the timeout from triggering.
  clearTimeout(timeOutId);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  // Schedule a new timeout.
  timeOutId = setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//Pricing Per Build
let selectPlan = document.querySelector("#dropdown");
let basicBtn = document.querySelector("#requestbasic");
let standardBtn = document.querySelector("#requeststandard");
let premiumBtn = document.querySelector("#requestpremium");

basicBtn.addEventListener("click", (e) => (selectPlan.value = "Basic"));
standardBtn.addEventListener("click", (e) => (selectPlan.value = "Standard"));
premiumBtn.addEventListener("click", (e) => (selectPlan.value = "Premium"));
