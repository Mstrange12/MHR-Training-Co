"use strict";

/* Modal One*/
const modal = document.querySelector('.modalOne');
const overlay = document.querySelector('.overlayOne');
const btnCloseModal = document.querySelector('.closeModalOne');
const btnsOpenModal =  document.querySelectorAll('.button-1');

const openModal = function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


/* Modal Two*/
const modalTwo = document.querySelector('.modalTwo');
const overlayTwo = document.querySelector('.overlayTwo');
const btnCloseModalTwo = document.querySelector('.closeModalTwo');
const btnsOpenModalTwo =  document.querySelectorAll('.button-2');

const openModalTwo = function () {
    console.log('Button Clicked');
    modalTwo.classList.remove('hidden');
    overlayTwo.classList.remove('hidden');
};

const closeModalTwo = function () {
    modalTwo.classList.add('hidden');
    overlayTwo.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalTwo.length; i++)
    btnsOpenModalTwo[i].addEventListener('click', openModalTwo);

btnCloseModalTwo.addEventListener('click', closeModalTwo);
overlayTwo.addEventListener('click', closeModalTwo);

/* Modal Three*/
const modalThree = document.querySelector('.modalThree');
const overlayThree = document.querySelector('.overlayThree');
const btnCloseModalThree = document.querySelector('.closeModalThree');
const btnsOpenModalThree =  document.querySelectorAll('.button-3');

const openModalThree = function () {
    console.log('Button Clicked');
    modalThree.classList.remove('hidden');
    overlayThree.classList.remove('hidden');
};

const closeModalThree = function () {
    modalThree.classList.add('hidden');
    overlayThree.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalThree.length; i++)
    btnsOpenModalThree[i].addEventListener('click', openModalThree);

btnCloseModalThree.addEventListener('click', closeModalThree);
overlayThree.addEventListener('click', closeModalThree);

/* Modal Four*/
const modalFour = document.querySelector('.modalFour');
const overlayFour = document.querySelector('.overlayFour');
const btnCloseModalFour = document.querySelector('.closeModalFour');
const btnsOpenModalFour =  document.querySelectorAll('.button-4');

const openModalFour = function () {
    console.log('Button Clicked');
    modalFour.classList.remove('hidden');
    overlayFour.classList.remove('hidden');
};

const closeModalFour = function () {
    modalFour.classList.add('hidden');
    overlayFour.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalFour.length; i++)
    btnsOpenModalFour[i].addEventListener('click', openModalFour);

btnCloseModalFour.addEventListener('click', closeModalFour);
overlayFour.addEventListener('click', closeModalFour);


