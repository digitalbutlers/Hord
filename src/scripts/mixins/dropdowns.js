// eslint-disable-next-line no-unused-vars
function initDropdowns({
	faqQuestionSelector,
	hiddenBlocksSelector,
	itemSelector,
	eventType = 'click',
	activeClass = 'js--active',
}) {
	const faqQuestion = document.querySelectorAll(faqQuestionSelector);
	const hiddenBlocks = document.querySelectorAll(hiddenBlocksSelector);

	faqQuestion.forEach((elem, numb) => {
		elem.addEventListener(eventType, () => {
			const parentElem = elem.closest(itemSelector);
			const hiddenBlock = parentElem.querySelector(hiddenBlocksSelector);
			const hiddenBlockHeight = hiddenBlock.scrollHeight;
			hiddenBlocks.forEach((item, ind) => {
				if (numb === ind) {
					if (item.classList.contains(activeClass)) {
						item.closest(itemSelector).classList.remove(activeClass);
						item.classList.remove(activeClass);
						// eslint-disable-next-line no-param-reassign
						item.style.height = `${0}px`;
					} else {
						item.closest(itemSelector).classList.add(activeClass);
						item.classList.add(activeClass);
						// eslint-disable-next-line no-param-reassign
						item.style.height = `${hiddenBlockHeight}px`;
					}
				} else {
					item.closest(itemSelector).classList.remove(activeClass);
					item.classList.remove(activeClass);
					// eslint-disable-next-line no-param-reassign
					item.style.height = `${0}px`;
				}
			});
		});
	});
}
