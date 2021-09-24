import FormValidator from "./FormValidator.js";

const popupForm = document.querySelector('.popup-form');
const userForm = document.querySelector('.form-user')
const popupRecord = document.querySelector('.popup-record');
const key = "Escape";
const formPopup = popupForm.querySelector('.popup__form');
const form = document.querySelector('.form-user');



const validationConfig = {
    formSelector: '.form-user',
    formInputSelector: '.form__input_validate',
    formButtonSelector: '.form-button',
    formButtonDisabled: 'form__button_disabled',
    formInputTypeError: 'form__input_type_error',
    formInputErrorActive: 'form__input-error_active',
    formInputError: '.form__input-error'
}

// отурытие  popup
function openPopup (element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
    element.addEventListener('click', closeOverlay);
}

//закрытие ESC
function closeByEsc(evt) {
    if (evt.key === key) {
        const closedPopup = document.querySelector('.popup_opened');
        closePopup(closedPopup); 
    }
} 

// закрытие overlay
function closeOverlay (evt){
    if (evt.target.classList.contains('popup')) {
        const closedPopup = document.querySelector('.popup_opened');
        closePopup(closedPopup); 
    }
}

//закрытие popup
function closePopup(element) {
    popupFormValidator.removeValidationErrors();
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
    element.removeEventListener('click', closeOverlay);
}

//слушатель открытия формы
document.querySelectorAll('.button').forEach ((element) => {
    element.addEventListener('click', () => {
        openPopup(popupForm);
    });
});

popupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    closePopup(popupForm);
    openPopup(popupRecord);
});

userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileFormValidator.removeValidationErrors();
    openPopup(popupRecord);
});

document.querySelectorAll('.popup__close-icon').forEach (button => {
    button.addEventListener('click', (evt) =>{
        const elementClose = evt.target.closest('.popup');
        closePopup(elementClose);
});
});

const popupFormValidator = new FormValidator (validationConfig, formPopup);
popupFormValidator.enableValidation();

const profileFormValidator = new FormValidator (validationConfig, form);
profileFormValidator.enableValidation();