let descriptionItems
let popupInput
let popupAceptBtn
let popupCancelBtn
let itemsHeroEdit

const main = () => {
	prepareDOMElement()
	prepareDOMEvents()
}

const prepareDOMElement = () => {
	descriptionItems = document.querySelector('.description__items')
	popupInput = document.querySelector('.popup__input')
	popupAceptBtn = document.querySelector('.actept')
	popupCancelBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	descriptionItems.addEventListener('click', checkItems)
	popupAceptBtn.addEventListener('click', editItems)
}

const checkItems = (e) => {
	if(e.target.matches('span')) {
		itemValue(e)
	}
}

const itemValue = (eventFromCheckItems) => {
	itemsHeroEdit = eventFromCheckItems.target.closest('span')
	popupInput.value = itemsHeroEdit.firstChild.textContent
}

const editItems = () => {
	itemsHeroEdit.firstChild.textContent = popupInput.value
}
















// automatyczna zmiana daty w footer
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
// Wywołanie funkcji
handleCurrentYear()

// nasłuchiwanie na całą stronę, scripty nie uruchomią się zanim niewczyta się cała strona.
document.addEventListener('DOMContentLoaded', main)
