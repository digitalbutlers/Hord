

const btnToggleMode = document.querySelector('[data-name="toggle-mode"]');

function toggleMode() {
	if (localStorage.modThemes && localStorage.modThemes === 'light') {
		// eslint-disable-next-line no-undef
		BODY.classList.add('js--light-mode');
		btnToggleMode.classList.add('js--light-true');
		btnToggleMode.innerHTML = 'Dark';
	} else if (localStorage.modThemes && localStorage.modThemes === 'dark') {
		// eslint-disable-next-line no-undef
		BODY.classList.remove('js--light-mode');
		btnToggleMode.classList.remove('js--light-true');
		btnToggleMode.innerHTML = 'Light';
	}
}
toggleMode();
function checkAttribute() {
	// eslint-disable-next-line no-undef
	if (BODY.classList.contains('js--light-mode')) {
		localStorage.setItem('modThemes', 'dark');
	} else {
		localStorage.setItem('modThemes', 'light');
	}
	toggleMode();
}
btnToggleMode.addEventListener('click', checkAttribute);


