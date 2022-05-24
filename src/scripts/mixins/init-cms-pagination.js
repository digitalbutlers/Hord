function initCmsPagination() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	// eslint-disable-next-line no-undef
	const projectsGrid = new FsLibrary('.collection-list');

	// run loadmore on our instance
	projectsGrid.loadmore({
		button: '.load-more-button',
		resetIx: true,
		loadAll: true,
		paginate: {
			enable: true,
			itemsPerPage:
			/* кол-во элементов на странице в зависимости от ширины экрана (не меняются по ресайзу) */
        // eslint-disable-next-line no-nested-ternary
        window.innerWidth > 1279 ? 5 : window.innerWidth > 768 ? 5 : 5,
			insertPagination: '.pagination-container',
			bgColor: '#ffffff',
			bgColorActive: '#7757ff',
			textColor: '#000000',
			textColorActive: '#FFFFFF',
			borderColor: '#3D315B',
		},
		animation: {
			enable: true,
			effects: 'fade',
			duration: 400,
		},
	});
}


initCmsPagination();
