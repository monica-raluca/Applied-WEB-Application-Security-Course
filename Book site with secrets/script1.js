const btnPopup = document.querySelector('.btn');
const icon = document.querySelector('.logo');
const secret_page = document.querySelector('.secret');

btnPopup.addEventListener('click', () => {
    icon.classList.add('clickable');
});

icon.addEventListener('click', ()=> {
    secret_page.classList.add('show');
});

