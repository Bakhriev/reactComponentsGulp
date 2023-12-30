export const tableToggle = () => {
	const tableItems = document.querySelectorAll('.table__item')

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
}
