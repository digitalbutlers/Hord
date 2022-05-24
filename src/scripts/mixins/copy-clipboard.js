/* eslint-disable no-undef */
// eslint-disable-next-line no-new
new ClipboardJS('[data-title="btn-copy"]');

const copyButton = document.querySelectorAll('[data-name="btn-copy"]');
const copyLink = document.querySelectorAll('[data-name="copied-text"]');

copyButton.forEach((element, index) => {
	element.setAttribute('data-clipboard-text', `${copyLink[index].textContent}`);
});

const clickToCopy = document.querySelectorAll('[data-name="btn-copy"]');

function copyText() {
	this.classList.add('copied');
	setTimeout(() => {
		this.classList.remove('copied');
	}, 1500);
}

for (let i = 0; i < clickToCopy.length; i += 1) {
	clickToCopy[i].addEventListener('click', copyText);
}
