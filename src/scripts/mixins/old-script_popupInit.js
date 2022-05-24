

function popupInit() {
	const lastDate = localStorage.getItem('token-pu')
		? localStorage.getItem('token-pu')
		: 0;
	const currentDate = new Date();

	const popUp = document.querySelector('.pu');

	function closePu() {
		popUp.style.opacity = '0';
		popUp.style.pointerEvents = 'none';
		localStorage.setItem('token-pu', `${currentDate}`);
		setTimeout(() => {
			popUp.remove();
		}, 550);
	}
	if (currentDate - lastDate > 7 * 24 * 3600 * 1000) {
		const popUpCross = popUp.querySelector('.pu__cross');

		popUp.style.opacity = '0';
		popUp.style.pointerEvents = 'none';
		popUp.style.position = 'fixed';

		const popUpWidth = parseFloat(getComputedStyle(popUp).width);
		const popUpHeight = parseFloat(getComputedStyle(popUp).height);
		let popUpIndent;
		if (window.innerWidth <= 767) {
			popUpIndent = 15;
		} else {
			popUpIndent = 30;
		}

		popUp.style.width = `${popUpWidth}px`;
		popUp.style.height = `${popUpHeight}px`;
		popUp.style.left = `calc((100vw - ${popUpWidth}px) / 2)`;
		popUp.style.bottom = `calc((100vh - ${popUpHeight}px) / 2)`;

		popUp.style.transition = 'all 0.5s ease';
		setTimeout(() => {
			popUp.style.pointerEvents = 'auto';
			popUp.style.opacity = '1';

			setTimeout(() => {
				if (window.innerWidth > 767) {
					popUp.style.width = `${popUpWidth / 2}px`;
					popUp.style.height = `${popUpHeight / 2}px`;
					popUp.style.left = `${popUpIndent}px`;
				}
				popUp.style.bottom = `${popUpIndent}px`;
			}, 3000);
		}, 4000);


		popUp.addEventListener('click', closePu);
		popUpCross.addEventListener('click', closePu);
	} else {
		popUp.remove();
	}
}

document.addEventListener('DOMContentLoaded', popupInit);
