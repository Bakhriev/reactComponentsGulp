export const dropdownToggle = () => {
	const dropdowns = document.querySelectorAll('.dropdown')
	const toggles = document.querySelectorAll('.dropdown__toggle')
	const items = document.querySelectorAll('.dropdown__item')
	const dropdownInput = document.querySelector('.dropdown__input')

	items?.forEach(item => {
		item.addEventListener('click', e => {
			dropdownInput.value = item.textContent
			e.target.closest('.dropdown').classList.remove('dropdown_active')
		})
	})

	toggles?.forEach(toggle => {
		toggle.addEventListener('click', () => {
			const dropdown = toggle.closest('.dropdown')
			dropdown.classList.toggle('dropdown_active')
		})
	})
}
