const search = function() {
	const input = document.querySelector('.search-block > input')
	const searchBnt = document.querySelector('.search-block > button')
	
	input.addEventListener('input', (event) => {
		console.log(event.target.value)
	})

	searchBnt.addEventListener('click', (event) => {
		console.log(input.value)
	})
}
search()