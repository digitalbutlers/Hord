const navButtons = document.querySelectorAll('.navbar-item');
const navArrows = document.querySelectorAll('.navbar-item-arrow');
const navLists = document.querySelectorAll('.navbar-list');
const navListsWrappers = document.querySelectorAll('.navbar-list-wrapper');

function closeAll() {
	for (let i = 0; i < navLists.length; i += 1) {
		navLists[i].style.opacity = '0';
		navListsWrappers[i].style.pointerEvents = 'none';
		navArrows[i].style.transform = 'rotate(0deg)';
		// eslint-disable-next-line no-undef
		if (window.innerWidth < BREAKPOINTS.middle_size) {
			navListsWrappers[i].style.height = '0px';
		}
	}
}

closeAll();

for (let i = 0; i < navLists.length; i += 1) {
	navLists[i].style.transition = 'opacity 0.3s ease';
}

for (let i = 0; i < navButtons.length; i += 1) {
	// eslint-disable-next-line no-loop-func
	navButtons[i].addEventListener('click', () => {
		if (navLists[i].style.opacity === '0') {
			closeAll();
			navLists[i].style.opacity = '1';
			navListsWrappers[i].style.pointerEvents = 'auto';
			navArrows[i].style.transform = 'rotate(180deg)';
			// eslint-disable-next-line no-undef
			if (window.innerWidth < BREAKPOINTS.middle_size) {
				navListsWrappers[i].style.height = 'auto';
			}
		} else {
			navLists[i].style.opacity = '0';
			navListsWrappers[i].style.pointerEvents = 'none';
			navArrows[i].style.transform = 'rotate(0deg)';
			// eslint-disable-next-line no-undef
			if (window.innerWidth < BREAKPOINTS.middle_size) {
				navListsWrappers[i].style.height = '0px';
			}
		}
	});
}

for (let i = 0; i < navButtons.length; i += 1) {
	window.addEventListener('click', (e) => {
		if (!e.target.closest('.navbar-item-wrapper')) {
			closeAll();
		}
	});
}
