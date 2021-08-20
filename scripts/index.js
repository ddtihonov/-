
const popup = document.querySelector('.popup');


// отурытие всех popup
function openPopup (element) {
    element.classList.add('popup_opened');
}

document.querySelector('.profile__changes-button').addEventListener('click', outputUser);
document.querySelector('.profile__add-button').addEventListener('click', outpuCell);

//закрытие всех popup
function closePopup(evt) {
    evt.target.closest('.popup').classList.remove('popup_opened');
}

document.querySelectorAll('.popup__close-icon').forEach (button => {
    button.addEventListener('click', closePopup);
})

