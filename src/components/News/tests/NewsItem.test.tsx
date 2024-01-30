import NewsItem, { NewsItemProps } from './../NewsItem';
import { render, screen } from '../../../utils/test-utils';

const mockNewsItemProps: NewsItemProps = {
	id: 1,
	title: 'Спільна прогулянка',
	post_at: '14 грудня 2023',
	update_at: '14 грудня 2023',
	sub_text:
		'Ми запрошуємо всіх на спільну прогулянку з нашими собаками. Приходьте та проведіть час з цими чудовими тваринами!',
	url: 'www.url.com',
	photo: {
		id: '1',
		name: 'Спільна прогулянка',
		url: 'www.url.com',
		category: 'string',
	},
};

describe('NewsItem component tests', () => {
	it('renders the image', () => {
		render(<NewsItem {...mockNewsItemProps} />);
		const image = screen.getByAltText('news-photo');
		expect(image).toBeInTheDocument();
	});

	it('renders news title', () => {
		render(<NewsItem {...mockNewsItemProps} />);
		const titleElement = screen.getByRole('heading', { level: 3 });
		expect(titleElement).toBeInTheDocument();
	});

	it('renders news text', () => {
		render(<NewsItem {...mockNewsItemProps} />);
		const text = screen.getByTestId('newsItem');
		expect(text).toBeInTheDocument();
	});

	it('contains link to full news', () => {
		render(<NewsItem {...mockNewsItemProps} />);
		const link = screen.getByRole('link');
		expect(link).toBeInTheDocument();
	});
});
