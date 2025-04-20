const cart = function() {
	const cartBtn = document.querySelector('.button-cart')
	const cart = document.getElementById('modal-cart')
	const cartClose = document.querySelector('.modal-close')
	
	cartBtn.addEventListener('click', function() {
		cart.style.display = 'flex'
	})
	
	cartClose.addEventListener('click', function() {
		cart.style.display = ''
	})

	cart.addEventListener('click', (event) => {
		const modalContent = event.target.closest('.modal')
		if (!modalContent) {
			cart.style.display = ''
		}
	})
}
cart()