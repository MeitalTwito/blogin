'use strict'

function onContinueReading(el){
    el.innerText += ' →'
}

function offContinueReading(el) {
    el.innerText = 'Continue Reading'
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}


function openModal() {
    document.body.classList.add('modal-open');
}

function closeModal(){
    document.body.classList.remove('modal-open');

}