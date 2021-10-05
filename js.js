

let button = document.querySelector('.button');
let popup = document.querySelector('.modal');
let popups = document.querySelector('.modal-1');

button.addEventListener('click', function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
   popups.classList.add("modal-shows");
})

