import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import Header from '../Header';

vi.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
		i18n: { changeLanguage: vi.fn(), language: 'ua' },
	}),
}));

describe('Header component tests', () => {
	it('renders logo with alt text', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);
		const logo = screen.getByAltText('Best Friend logo');
		expect(logo).toBeInTheDocument();
	});

	it('renders navigation links', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);
		const navLinks = screen.getAllByRole('link', {
			name: /Main|About|Pets|Contact|Головна|Про притулок|Наші хвостики|Контакти/i,
		});
		expect(navLinks).toHaveLength(4);
	});

	it('changes language on button click', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);
		const uaBtn = screen.getByTestId('langBtnUa');
		fireEvent.click(uaBtn);

		expect(uaBtn.className).toContain('header_lng_btn_active');
	});

	test('toggles mobile menu on button click', () => {
		window.innerWidth = 400;

		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);

		const mobMenuBtn = screen.getByLabelText('CiMenuBurger');

		fireEvent.click(mobMenuBtn);

		const closeMenuBtn = screen.getByLabelText('IoCloseOutline');
		expect(closeMenuBtn).toBeInTheDocument();
	});

	it('closes mobile menu on button click', () => {
		window.innerWidth = 400;

		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);

		const mobMenuBtn = screen.getByLabelText('CiMenuBurger');
		fireEvent.click(mobMenuBtn);

		const closeMenuBtn = screen.getByLabelText('IoCloseOutline');
		fireEvent.click(closeMenuBtn);

		expect(mobMenuBtn).toBeInTheDocument();
	});
});
