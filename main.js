// automatyczna zmiana daty w footer
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
// Wywołanie funkcji
handleCurrentYear()