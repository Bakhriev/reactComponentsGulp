export const handleAccordionToggle = () => {
	const accordion = document.querySelector('.accordion')
	const accordionToggle = accordion.querySelector('.accordion__toggle')
	const accordionWrapper = accordion.querySelector('.accordion__wrapper')

	accordionToggle.addEventListener('click', () => {
		accordion.classList.toggle('accordionActive')
	})
}
