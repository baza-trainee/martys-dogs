/*import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Partners from './Partners';
import Icon1 from '../../assets/partners_about/PurinaLogo.svg';
import Icon2 from '../../assets/partners_about/RoyalCanineLogo.svg';

describe('Partners component', () => {
	it('renders correctly Partners component', () => {
		render(<Partners />);

    const customIcons= {
			icons: [Icon1, Icon2, Icon1, Icon2, Icon1, Icon2],
		};
    
		const titleElement = screen.getByTestId('partners-title');
		expect(titleElement.textContent).toBe('Наші партнери');

		const icons = screen.getAllByAltText(/Purina|Royal Canine/);
		expect(icons.length).toBe(6);

		icons.forEach((icon, index) => {
			expect(icon.getAttribute('src')).toBe(
				customIcons.icons[index],
			);
		});
	});
});
*/