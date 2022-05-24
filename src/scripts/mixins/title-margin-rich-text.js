
const titleRichText = document.querySelectorAll('.article__body h2, .article__body h3, .article__body h4, .article__body h1');
titleRichText.forEach((elem) => {
	if (elem.offsetTop > 0 && elem.offsetTop < 41) {
		const element = elem;
		element.style.marginTop = 0;
	}
});
