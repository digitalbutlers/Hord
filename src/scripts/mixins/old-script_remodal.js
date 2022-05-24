if (window.innerWidth < 991) {
	const blurBlocks = document.querySelectorAll(
		'.remodal-bg >*:not(:first-child)',
	);
	const button = document.querySelector('.drop-down__button');
	for (let i = 0; i < blurBlocks.length; i += 1) {
		blurBlocks[i].style.transition = 'filter 0.3s ease';
	}
	const list = document.querySelector('.drop-down__list');
	const cross = document.querySelector('.drop-down__cross');
	button.addEventListener('click', () => {
		if (list.classList.contains('drop-down__list--hidden')) {
			list.classList.remove('animation-end');
			list.classList.remove('drop-down__list--hidden');
			list.classList.add('animation-start');
			for (let i = 0; i < blurBlocks.length; i += 1) {
				blurBlocks[i].classList.add('blur');
			}
		} else {
			list.classList.add('animation-end');
			setTimeout(() => list.classList.add('drop-down__list--hidden'), 400);
			list.classList.remove('animation-start');
			for (let i = 0; i < blurBlocks.length; i += 1) {
				blurBlocks[i].classList.remove('blur');
			}
		}
	});
	cross.addEventListener('click', () => {
		list.classList.add('animation-end');
		setTimeout(() => list.classList.add('drop-down__list--hidden'), 400);
		list.classList.remove('animation-start');
		for (let i = 0; i < blurBlocks.length; i += 1) {
			blurBlocks[i].classList.remove('blur');
		}
	});
} else {
	const button = document.querySelector('.drop-down__button');
	const list = document.querySelector('.drop-down__list');
	const cross = document.querySelector('.drop-down__cross');
	button.addEventListener('click', () => {
		if (list.classList.contains('drop-down__list--hidden')) {
			list.classList.remove('animation-end');
			list.classList.remove('drop-down__list--hidden');
			list.classList.add('animation-start');
		} else {
			list.classList.add('animation-end');
			setTimeout(() => list.classList.add('drop-down__list--hidden'), 400);
			list.classList.remove('animation-start');
		}
	});
	cross.addEventListener('click', () => {
		list.classList.add('animation-end');
		setTimeout(() => list.classList.add('drop-down__list--hidden'), 400);
		list.classList.remove('animation-start');
	});
}
