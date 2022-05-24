function fillNav() {
	const headings = [
		...document.querySelectorAll('.article__body h2, .article__body h3'),
	];
	const sortedHeadings = [];
	if (headings.length < 1) {
		document.querySelector('.article__nav').remove();
		return;
	}
	for (let i = 0; i < headings.length; i += 1) {
		if (headings[i].tagName === 'H2') {
			sortedHeadings.push({
				h2: headings[i],
				h3: [],
			});
		} else {
			sortedHeadings[sortedHeadings.length - 1].h3.push(headings[i]);
		}
	}
	// eslint-disable-next-line no-shadow
	function createList(sortedHeadings, navSelector) {
		const prefix = 'part';
		const nav = document.querySelector(navSelector);
		const template = nav.querySelector(`${navSelector}> .dd`);

		for (let i = 0; i < sortedHeadings.length; i += 1) {
			const sortedHeading = sortedHeadings[i];

			const item = template.cloneNode(true);
			const mainLink = item.querySelector('.dd__link');
			mainLink.innerHTML = sortedHeading.h2.textContent;
			mainLink.setAttribute('href', `#${prefix}-${i + 1}`);
			sortedHeading.h2.setAttribute('id', `${prefix}-${i + 1}`);
			if (sortedHeading.h3.length) {
				const subNav = item.querySelector('.dd__content');
				const secondaryTemplate = subNav.querySelector('.dd__link--secondary');
				for (let j = 0; j < sortedHeading.h3.length; j += 1) {
					const subNavItem = secondaryTemplate.cloneNode(true);
					subNavItem.innerHTML = sortedHeading.h3[j].textContent;
					subNavItem.setAttribute('href', `#${prefix}-${i + 1}-${j + 1}`);
					sortedHeading.h3[j].setAttribute('id', `${prefix}-${i + 1}-${j + 1}`);
					subNav.append(subNavItem);
				}
				secondaryTemplate.remove();
			} else {
				item.querySelector('.dd__content').remove();
			}
			nav.append(item);
		}
		template.remove();
	}
	createList(sortedHeadings, '.article__nav');
}

fillNav();

function close(dd, content, closedClass) {
	const box = content;
	dd.classList.add(closedClass);
	box.style.height = '0px';
}
function open(dd, content, closedClass, currentContentHeight) {
	const box = content;
	dd.classList.remove(closedClass);
	box.style.height = `${currentContentHeight}px`;
}
function initDD(
	ddSelector,
	contentSelector,
	togglerSelector,
	eventType = 'click',
	closedClass = 'closed',
) {
	const ddList = [...document.querySelectorAll(ddSelector)].filter((el) => {
		if (!el.querySelector(contentSelector)) {
			el.querySelector(togglerSelector).remove();
			return false;
		}
		return true;
	});
	const contentHeights = [];

	for (let i = 0; i < ddList.length; i += 1) {
		const dd = ddList[i];
		const content = dd.querySelector(contentSelector);
		contentHeights.push(content.clientHeight);
		///

		close(dd, content, closedClass);

		// eslint-disable-next-line no-inner-declarations
		function closePrev() {
			const prev = document.querySelector(
				`${ddSelector}:not(.${closedClass})`,
			);
			try {
				prev.classList.add(closedClass);
				prev.querySelector(contentSelector).style.height = '0px';
			} catch (error) {
				// eslint-disable-next-line no-console
				console.log('there are no open dropdowns');
			}
		}
		dd.querySelector(togglerSelector).addEventListener(eventType, () => {
			if (dd.classList.contains(closedClass)) {
				const currentContentHeight = contentHeights[i];
				closePrev();
				open(dd, content, closedClass, currentContentHeight);
			} else {
				close(dd, content, closedClass);
			}
		});
	}
}

initDD('.dd', '.dd__content', '.dd__toggler');

