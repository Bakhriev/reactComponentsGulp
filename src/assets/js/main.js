const dropdowns = document.querySelectorAll('.dropdown')
const toggles = document.querySelectorAll('.dropdown__toggle')

toggles?.forEach(toggle => {
	toggle.addEventListener('click', () => {
		const dropdown = toggle.closest('.dropdown')
		dropdown.classList.toggle('dropdown_active')
	})
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

const tableItems = document.querySelectorAll('.table__item')
// tableItems.forEach(tableItem => {
// 	const tableCell = tableItem.querySelector('.table__cell')
// 	const tableInput = tableCell.querySelector('.table__input')
// 	const tableData = tableCell.querySelector('.table__key')

// 	tableData.addEventListener('click', () => {
// 		tableInput.classList.add('table__input_active')
// 		tableInput.classList.remove('table__input_empty')
// 		tableInput.focus()
// 		tableInput.value = tableData.textContent
// 	})

// 	tableInput.addEventListener('focusout', () => {
// 		tableData.textContent = tableInput.value
// 		tableInput.classList.remove('table__input_active')
// 		tableInput.classList.remove('table__input_empty')
// 		if (tableInput.value === '') {
// 			tableInput.classList.add('table__input_empty')
// 		}
// 	})

// 	tableInput.addEventListener('keydown', e => {
// 		if (e.key === 'Enter') {
// 			tableData.textContent = tableInput.value
// 			tableInput.classList.remove('table__input_active')
// 		}
// 	})
// })

tableItems.forEach(tableItem => {
	const tableCells = tableItem.querySelectorAll('.table__cell')
	const tableBtn = tableItem.querySelector('.table__btn')
	tableBtn.addEventListener('click', () => {
		tableItem.remove()
	})
	tableCells.forEach(tableCell => {
		const tableInput = tableCell.querySelector('.table__input')
		const tableData = tableCell.querySelector('.table__data')

		tableData.addEventListener('click', () => {
			tableInput.classList.add('table__input_active')
			tableInput.classList.remove('table__input_empty')
			tableInput.focus()
			tableInput.value = tableData.textContent
		})

		tableInput.addEventListener('focusout', () => {
			tableData.textContent = tableInput.value
			tableInput.classList.remove('table__input_active')
			tableInput.classList.remove('table__input_empty')
			if (tableInput.value === '') {
				tableInput.classList.add('table__input_empty')
			}
		})

		tableInput.addEventListener('keydown', e => {
			if (e.key === 'Enter') {
				tableData.textContent = tableInput.value
				tableInput.classList.remove('table__input_active')
			}
		})
	})
})

const accordion = document.querySelector('.accordion')
const accordionToggle = accordion.querySelector('.accordion__toggle')
const accordionWrapper = accordion.querySelector('.accordion__wrapper')

accordionToggle.addEventListener('click', () => {
	accordion.classList.toggle('accordionActive')
})
