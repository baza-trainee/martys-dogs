export const scrollToSection = (id: string) => {
	const section = document.querySelector(`#${id}`);

	if (section) {
		const scrollPosition = section.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
	}
};

export const scrollOnTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
