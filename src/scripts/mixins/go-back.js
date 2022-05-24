
const btnsGoBack = document.querySelectorAll('[data-name="go-back"]');

function goToPreviousPage() {
	window.history.back();
}
btnsGoBack.forEach((btn) => {
	btn.addEventListener('click', goToPreviousPage);
});

