const generalClassOfButtons = 'js--share-link';
const { href } = window.location;
const currentTitle = document.querySelector('h1').textContent;

function sharePage(network) {
	let newURL;
	switch (network) {
	case 'whats-app':
		newURL = `https://api.whatsapp.com/send?text=${href}`;
		break;
	case 'fb':
		newURL = `https://www.facebook.com/sharer.php?s=100&u=${href}&p[title]=${currentTitle}&p[summary]=${currentTitle}`;
		break;
	case 'twitter':
		newURL = `http://twitter.com/share?text=${currentTitle}&url=${href}`;
		break;
	case 'linked':
		newURL = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${currentTitle}`;
		break;
	case 'telegram':
		newURL = `https://t.me/share/url?url=${href}&title=${currentTitle}`;
		break;
	default:
		break;
	}
	window.open(
		newURL,
		currentTitle,
		'toolbar=0, status=0, width=640, height=640',
	);
}
function checkAtribute(event) {
	if (event.target.classList.contains(generalClassOfButtons)) {
		const network = event.target.getAttribute('data-network-name');
		sharePage(network);
	} else if (event.target.closest(`.${generalClassOfButtons}`)) {
		const network = event.target
			.closest(`.${generalClassOfButtons}`)
			.getAttribute('data-network-name');
		sharePage(network);
	}
}
window.addEventListener('click', checkAtribute);
