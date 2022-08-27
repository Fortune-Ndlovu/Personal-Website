
function Hamburger(nodeName) {
  let myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: () => myNode.addEventListener('click', e => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false), //activate
  } //return
} //Hamburger

let topMenu = new Hamburger('#topMenu');
topMenu.activate();

