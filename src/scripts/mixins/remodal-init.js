function remodalNotification(
	remodalId,
	timeToOpen = 3000,
	timeToHide = 24 * 3600 * 1000,
) {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const hideUntill = +localStorage.getItem(
		`hide${capitalizeFirstLetter(remodalId)}RemodalUntill`,
	) || 0;
	const currentTime = Date.now();
	if (hideUntill < currentTime) {
		setTimeout(() => {
			document.querySelector(`[data-remodal-target="${remodalId}"]`).click();
			localStorage.setItem(
				`hide${capitalizeFirstLetter(remodalId)}RemodalUntill`,
				`${currentTime + timeToHide}`,
			);
		}, timeToOpen);
	}
}
remodalNotification('token');
