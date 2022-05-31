

async function copyContent(currentBtn) {
	const nearParrenForCoppiedElements = currentBtn.closest('[data-name="parent-copied-elements"]');
	const copiedContent = nearParrenForCoppiedElements.querySelector('[data-name="copied-content"]').textContent;

	try {
		await navigator.clipboard.writeText(copiedContent);
		console.log('нужный контент скопирован в буфер обмена');
	} catch (err) {
		console.error('Ошибка копирования в буфер: ', err);
	}
}

function copyText(event) {
	if (event.target.getAttribute('data-name') === 'btn-copy') {
		const currentBtn = event.target;
		currentBtn.classList.add('copied');
		copyContent(currentBtn);
		setTimeout(() => {
			currentBtn.classList.remove('copied');
		}, 1500);
	} else if (event.target.closest('[data-name]')
	&& event.target.closest('[data-name]').getAttribute('data-name') === 'btn-copy') {
		const currentBtn = event.target.closest('[data-name]');
		currentBtn.classList.add('copied');
		copyContent(currentBtn);
		setTimeout(() => {
			currentBtn.classList.remove('copied');
		}, 1500);
	}
}

document.addEventListener('click', copyText);
