document.addEventListener('DOMContentLoaded', () => {
	fixedHeader();
});

function fixedHeader() {
	const headerMain = document.querySelector('.header__main.header-main');

	if (!headerMain) return;

	function getHeaderHeight() {
		return headerMain.clientHeight;
	}

	function setFixed() {
		const headerHeight = getHeaderHeight();
		const scrollChange = window.scrollY;

		if (scrollChange >= headerHeight) {
			headerMain.classList.add('header-main--fixed');
		} else {
			headerMain.classList.remove('header-main--fixed');
		}
	}

	window.addEventListener('scroll', setFixed);
	window.addEventListener('resize', setFixed);
}
