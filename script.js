const title =document.querySelector('.title');

console.log(title.innerText);

if (title.innerText == 'Quero ser trocado') {
    title.innerHTML = 'Hello World';
}

console.log(title.innerText);