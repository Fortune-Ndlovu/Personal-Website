//Hamburger menu
function Hamburger(nodeName) {
  let myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: () => myNode.addEventListener('click', e => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false), //activate
  } //return
} //Hamburger

let topMenu = new Hamburger('#topMenu');
topMenu.activate();


//Image slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }//slides

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }//dots
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//Pricing Per Build
let selectPlan = document.querySelector('#dropdown');
let basicBtn = document.querySelector('#requestbasic');
let standardBtn = document.querySelector('#requeststandard');
let premiumBtn = document.querySelector('#requestpremium');

basicBtn.addEventListener('click', e => selectPlan.value = 'Basic');
standardBtn.addEventListener('click', e => selectPlan.value = 'Standard');
premiumBtn.addEventListener('click', e => selectPlan.value = 'Premium');

