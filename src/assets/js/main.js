const dropdown = document.querySelector('.dropdown')
const toggle = document.querySelector('.dropdown__toggle')

toggle?.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown_active')
})

const popup = document.querySelector('.popup')
const popupOpen = document.querySelector('.addCard')
const overlay = document.querySelector('.overlay')
const popupClose = document.querySelector('.popup__close')
popupOpen?.addEventListener('click', () => {
	popup.classList.add('popup_active')
	overlay.classList.add('overlay_active')
})

popupClose?.addEventListener('click', () => {
	popup.classList.remove('popup_active')
	overlay.classList.remove('overlay_active')
})

overlay?.addEventListener('click', () => {
	popup.classList.remove('popup_active')
	overlay.classList.remove('overlay_active')
})
