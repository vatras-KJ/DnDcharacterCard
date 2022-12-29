// zmienne globalne do popup
let descriptionItems
let popup
let popupInput
let popupInfo
let popupAceptBtn
let popupCancelBtn
let itemsHeroEdit

// główna funkcja do wywołania funkcji
const main = () => {
	prepareDOMElement()
	prepareDOMEvents()
}

// funkcja pobierania elementów
const prepareDOMElement = () => {
	descriptionItems = document.querySelector('.description__items')
	popup = document.querySelector('.popup')
	popupInput = document.querySelector('.popup__input')
	popupAceptBtn = document.querySelector('.actept')
	popupCancelBtn = document.querySelector('.cancel')
	popupInfo = document.querySelector('.popup__info')
}

// funkcja nasłuchująca
const prepareDOMEvents = () => {
	descriptionItems.addEventListener('click', checkItems)
	popupAceptBtn.addEventListener('click', editItems)
	popupCancelBtn.addEventListener('click', cancelPopup)
}

// funkcja sprawdzająca czy właściwy element został kliknięty
const checkItems = e => {
	if (e.target.matches('span')) {
		itemValue(e)
		popup.style.display = 'block'
	}
}

// funkcja wpisująca wybraną wartość do inputa
const itemValue = eventFromCheckItems => {
	let characterProperties
	if (eventFromCheckItems.target.matches('#age')) {
		characterProperties = 'age'
	} else if (eventFromCheckItems.target.matches('#growth')) {
		characterProperties = 'growth'
	} else if (eventFromCheckItems.target.matches('#weight')) {
		characterProperties = 'weight'
	} else if (eventFromCheckItems.target.matches('#eyes')) {
		characterProperties = 'eyes'
	} else if (eventFromCheckItems.target.matches('#skin')) {
		characterProperties = 'skin'
	} else if (eventFromCheckItems.target.matches('#hair')) {
		characterProperties = 'hair'
	}

	popupInfo.textContent = characterProperties

	itemsHeroEdit = eventFromCheckItems.target.closest('span')
	popupInput.value = itemsHeroEdit.firstChild.textContent
}

// funkcja wprowadzająca zmiany z inputa do elementu
const editItems = () => {
	itemsHeroEdit.firstChild.textContent = popupInput.value
	popupInfo.textContent = 'Select option'
	popupInput.value = ''
}

// funkcja zamykająca popup
const cancelPopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = 'Select option'
	popupInput.value = ''
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
