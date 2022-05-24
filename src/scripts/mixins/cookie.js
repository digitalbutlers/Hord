const cookie = document.querySelector('.cookie');
const currentCookieContent = document.querySelector('.cookie__text').textContent;
const cookieButton = document.querySelector('.cookie__button');

const lastCookieContent = localStorage.getItem('lastCookieContent');

if (currentCookieContent !== lastCookieContent) {
	setTimeout(() => {
		cookie.style.opacity = '1';
	}, 500);
	cookieButton.addEventListener('click', () => {
		localStorage.setItem('lastCookieContent', `${currentCookieContent}`);
		cookie.style.opacity = '0';
		cookie.style.pointerEvents = 'none';
		setTimeout(() => {
			cookie.remove();
		}, 550);
	});
} else {
	cookie.remove();
}
