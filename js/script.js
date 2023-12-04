let btn = document.querySelector('.burger');
let close = document.querySelector('.burger-x');
let burgerMenu = document.querySelector('.burger-menu');

btn.onclick = function () {
  burgerMenu.classList.add('show');
}

close.onclick = function () {
  burgerMenu.classList.remove('show');
}