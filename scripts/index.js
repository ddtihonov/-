
const popupForm = document.querySelector('.popup-form');
const popupRecord = document.querySelector('.popup-record');
const key = "Escape";


// отурытие  popup
function openPopup (element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
    element.addEventListener('click', closeOverlay);
}

function closeByEsc(evt) {
    if (evt.key === key) {
        const closedPopup = document.querySelector('.popup_opened');
        closePopup(closedPopup); 
    }
} 

function closeOverlay (evt){
    if (evt.target.classList.contains('popup')) {
        const closedPopup = document.querySelector('.popup_opened');
        closePopup(closedPopup); 
    }
}

//закрытие popup
function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
    element.removeEventListener('click', closeOverlay);
}

//слушатель открытия формы
document.querySelectorAll('.button').forEach (element => {
    element.addEventListener('click', () => {
        openPopup(popupForm)
    });
});

//слушатель подтверждения отправки
document.querySelectorAll('.button-submit').forEach (element => {
    element.addEventListener('submit', submitForm);
});


document.querySelectorAll('.popup__close-icon').forEach (button => {
    button.addEventListener('click', function (evt){
        const elementClose = evt.target.closest('.popup');
        closePopup(elementClose);
});
});

function submitForm (evt) {
    evt.preventDefault();
    console.log('приветыыыыыыыыыыыыыыыы')
}