const dropdown = document.querySelector('.dropdown')
const toggle = document.querySelector('.dropdown__toggle')

toggle.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown_active')
})
