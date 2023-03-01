const title = document.querySelector('.title');
const cover = document.querySelector('.cover');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const darkThemeButton = document.querySelector('.btn-dark');
const lightThemeButton = document.querySelector('.btn-light');
const coverSub = document.querySelector('.coverSub');

function lightMode() {
    body.style.backgroundImage = 'url(background-gradient.svg)';
    container.style.backgroundColor = '#f4f4f4';
    container.style.color = '#000';
}

function darkMode() { 
    body.style.backgroundImage = 'url(background-dark-gradient.svg)';
    container.style.backgroundColor = '#242424';
    container.style.color = '#fff';
}

function goToLogin() {
    if(cover.classList.contains('toRegister')) {
        cover.classList.remove('toRegister');
    }
    cover.classList.add('toLogin');
    coverSub.innerText = 'Bora se logar?';
}

function goToRegister() {
    if(cover.classList.contains('toLogin')) {
        cover.classList.remove('toLogin');
    }

    coverSub.innerText = 'Bora se cadastrar?';
}