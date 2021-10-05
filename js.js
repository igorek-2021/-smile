

let button = document.querySelector('.button');
let popup = document.querySelector('.modal');

button.addEventListener('click', function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
})

