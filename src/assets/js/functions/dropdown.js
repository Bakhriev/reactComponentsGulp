export const dropdownToggle = () => {
	const dropdowns = document.querySelectorAll('.dropdown')
	const toggles = document.querySelectorAll('.dropdown__toggle')
	toggles?.forEach(toggle => {
		toggle.addEventListener('click', () => {
			const dropdown = toggle.closest('.dropdown')
			dropdown.classList.toggle('dropdown_active')
		})
	})
}
