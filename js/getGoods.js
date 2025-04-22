const getGoods = () => {
	const links = document.querySelectorAll('.navigation-link')

	const renderGoods = (goods) => {
		const goodsContainer = document.querySelector('.long-goods-list')

		goodsContainer.innerHTML = ''
		
		goods.forEach(good => {
			const goodBlock = document.createElement('div')

			goodBlock.classList.add('col-lg-3')
			goodBlock.classList.add('col-sm-6')

			goodBlock.innerHTML = `
				<div class="goods-card">
					<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
					<img src="db/${good.img}" alt="image: ${good.name}" class="goods-image">
					<h3 class="goods-title">${good.name}</h3>
					<p class="goods-description">${good.description}</p>
					<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
						<span class="button-price">$${good.price}</span>
					</button>
				</div>
			`

			// console.log(good)

			// console.log(goodBlock)

			goodsContainer.append(goodBlock)
		})
	}

	const getData = (value, category) => {
		fetch('/db/db.json')
		.then((res) => res.json())
		.then(function(data) {
			const array = category ? data.filter((item) => item[category] === value) : data

			localStorage.setItem('goods', JSON.stringify(array))

			if (window.location.pathname !== '/goods.html') {
				window.location.pathname = '/goods.html'
			} else {
				renderGoods(array)
			}

			// window.location.href = '/goods.html'
			// console.log(window.location)
		})
	}

	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault()
			const linkValue = link.textContent
			const category = link.dataset.field

			getData(linkValue, category)
		})
	})

	// localStorage.setItem('goods', JSON.stringify([1,2,3]))

	// const goods = JSON.parse(localStorage.getItem('goods'))
	// console.log(goods)
	// console.log(localStorage)

	// localStorage.removeItem('goods')

	// console.log(localStorage)

	if (localStorage.getItem('goods') && window.location.pathname === '/goods.html') {
		renderGoods(JSON.parse(localStorage.getItem('goods')))
	}

	try {
		const more = document.querySelector('.more')
		more.href = '/goods.html'
	} catch(e) {
		console.log('Нет класса .more');
	}


}
getGoods()