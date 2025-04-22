const search = function() {
	const input = document.querySelector('.search-block > input')
	const searchBnt = document.querySelector('.search-block > button')

	searchBnt.addEventListener('click', () => {
		console.log(input.value)
	})

	// try {
	// 	searchBnt.addEventListener('click', () => {
	// 		console.log(input.value)
	// 	})
	// } catch(e) {
	// 	console.error(e.message);
	// }
}
search()