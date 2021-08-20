//const formUser = document.forms.user;
//const formCard = document.forms.card;

function isFieldValid(input) {

}

function validateField(input) {
    const errorElement = input.parentNode.querySelector(`.${inputElement.id}-error`);
    isFieldValid(input);
}

function setSubmitButtonState(button, state) {

}

function handlerInputForm(evt) {
    const form = evt.currentTarget;
    const input = evt.target;
    validateField(input);
}

function sendForm(evt) {

}

formUser.addEventListener('submit', sendForm);
formUser.addEventListener('input', handlerInputForm, true);

formCard.addEventListener('submit', sendForm);
formCard.addEventListener('input', handlerInputForm, true);
