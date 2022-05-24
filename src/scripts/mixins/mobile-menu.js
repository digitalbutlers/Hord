const targetEl = document.querySelector('[data-name = "btn-mob-menu"]');

function checkBtnMenu() {
	function callbackMenuBtn() {
		if (targetEl.classList.contains('w--open')) {
			// eslint-disable-next-line no-undef
			BODY.classList.add('js--overflow-hidden');
		} else {
			// eslint-disable-next-line no-undef
			BODY.classList.remove('js--overflow-hidden');
		}
	}
	const observerMenuBtn = new MutationObserver(callbackMenuBtn);
	observerMenuBtn.observe(targetEl, {
		attributes: true,
	});
}

document.addEventListener('DOMContentLoaded', checkBtnMenu);
