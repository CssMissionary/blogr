const buttonOne = document.querySelector('.btn-1');
const buttonTwo = document.querySelector('.btn-2');
const buttonThree = document.querySelector('.btn-3');

const buttonFour = document.querySelector('.btn-4');
const buttonFive = document.querySelector('.btn-5');
const buttonSix = document.querySelector('.btn-6');

const hamBurger = document.querySelector('.hamburger');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

hamBurger.addEventListener('click', () => {
    hamBurger.classList.add('close');
    closeModal.classList.add('open');
    modal.classList.add('open');
});
closeModal.addEventListener('click', () => {
    hamBurger.classList.remove('close');
    closeModal.classList.remove('open');
    modal.classList.remove('open');
})

const listOne = document.querySelector('.list-one');
const listTwo = document.querySelector('.list-two');
const listThree = document.querySelector('.list-three');

const listFour = document.querySelector('.list-four');
const listFive = document.querySelector('.list-five');
const listSix = document.querySelector('.list-six');


const arrowOne = document.querySelector('.arr1');
const arrowTwo = document.querySelector('.arr2');
const arrowThree = document.querySelector('.arr3');

const arrowFour = document.querySelector('.arr4');
const arrowFive = document.querySelector('.arr5');
const arrowSix = document.querySelector('.arr6');

buttonOne.addEventListener('click', () => {
    listOne.classList.toggle('open');
    listTwo.classList.remove('open');
    listThree.classList.remove('open');
    arrowOne.classList.toggle('flip');
    arrowTwo.classList.remove('flip');
    arrowThree.classList.remove('flip');
});
buttonTwo.addEventListener('click', () => {
    listOne.classList.remove('open');
    listTwo.classList.toggle('open');
    listThree.classList.remove('open');
    arrowOne.classList.remove('flip');
    arrowTwo.classList.toggle('flip');
    arrowThree.classList.remove('flip');
});
buttonThree.addEventListener('click', () => {
     listOne.classList.remove('open');
    listTwo.classList.remove('open');
    listThree.classList.toggle('open');
    arrowOne.classList.remove('flip');
    arrowTwo.classList.remove('flip');
    arrowThree.classList.toggle('flip');
});
buttonFour.addEventListener('click', () => {
    listFour.classList.toggle('open');
    listFive.classList.remove('open');
    listSix.classList.remove('open');
    arrowFour.classList.toggle('flip');
    arrowFive.classList.remove('flip');
    arrowSix.classList.remove('flip');
});
buttonFive.addEventListener('click', () => {
    listFour.classList.remove('open');
    listFive.classList.toggle('open');
    listSix.classList.remove('open');
    arrowFour.classList.remove('flip');
    arrowFive.classList.toggle('flip');
    arrowSix.classList.remove('flip');
});
buttonSix.addEventListener('click', () => {
    listFour.classList.remove('open');
    listFive.classList.remove('open');
    listSix.classList.toggle('open');
    arrowFour.classList.remove('flip');
    arrowFive.classList.remove('flip');
    arrowSix.classList.toggle('flip');
});