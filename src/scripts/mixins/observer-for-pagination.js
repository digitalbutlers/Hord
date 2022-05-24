

const titles = document.querySelectorAll(
	'.article__body h2, .article__body h3',
);
function toggleClassLinks() {
	titles.forEach((elem, index) => {
		const heightElem = elem.clientHeight;
		const tab = elem.offsetTop - 160;
		console.log(heightElem);
		console.log(tab);
		/* const scroll = $(window).scrollTop(); */
		const scroll = window.pageYOffset;
		if (scroll > tab && scroll < tab + heightElem) {
			const titleLinks = document.querySelectorAll('.dd__link');
			titleLinks.forEach((title, number) => {
				title.classList.remove('active');
				if (index === number) {
					title.classList.add('active');
				}
			});
		}
	});
}

toggleClassLinks();
window.addEventListener('scroll', toggleClassLinks);

