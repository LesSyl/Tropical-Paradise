const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const openNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	navBtnBars.classList.remove('black-bars-color')
	
	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}










const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {

		if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
			navBtnBars.classList.add('black-bars-color')
		}else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

handleCurrentYear()
burgerBtn.addEventListener('click', openNav)
window.addEventListener('scroll', handleObserver)
