export const scrollToSection = (id: string) => {
	const section = document.querySelector(`#${id}`);

	if (section) {
		const scrollPosition = section.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
	}
};

export const scrollOnTop = () => {
	const top = 0;

	if (document.scrollingElement) {
		document.scrollingElement.scrollTo({
      			top,
      			behavior: 'smooth',
    		});
  	} else if (document.documentElement?.scrollTo) {
    		document.documentElement.scrollTo({
      			top,
      			behavior: 'smooth',
    	});
  	} else {
    		window.scrollTo({
      			top,
      			behavior: 'smooth',
    		});
  	}
};
