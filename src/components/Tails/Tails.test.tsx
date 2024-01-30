import {
	QueryClient,
	QueryClientProvider,
	UseQueryResult,
	useQuery,
} from '@tanstack/react-query';
import { render, screen, waitFor } from '../../utils/test-utils';

import { LandingData } from '../../pages/Landing/Landing';
import { MemoryRouter } from 'react-router-dom';
import Tails from './Tails';

const mockQueryData: LandingData = {
	news: [
		{
			id: 1,
			title: 'Exciting News from the Pet World',
			post_at: '2022-01-01',
			update_at: '2022-01-02',
			sub_text: 'Learn about the latest happenings in the pet community.',
			url: 'https://example.com/exciting-pet-news',
			photo: {
				id: '1',
				name: 'News Photo',
				url: 'https://example.com/exciting-news-photo.jpg',
				category: 'News',
			},
		},
	],
	dog_cards: [
		{
			id: 1,
			name: 'Buddy',
			ready_for_adoption: true,
			gender: 'Male',
			age: '3 years',
			sterilization: true,
			vaccination_parasite_treatment: true,
			size: 'Medium',
			description:
				'Meet our boy, a friendly and energetic companion looking for a loving home.',
			photo: {
				id: '2',
				name: 'Buddy Photo',
				url: 'https://example.com/buddy-photo.jpg',
				category: 'Dog',
			},
		},
	],
};

const MockTails: React.FC = () => {
	const mockQueryResult: UseQueryResult<LandingData, Error> = useQuery({
		queryKey: ['landing'],
		queryFn: async () => mockQueryData,
	});

	return <Tails data={mockQueryResult} />;
};

const queryClient = new QueryClient();

describe('Tails component tests', () => {
	it('contains h2 element', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockTails />
				</MemoryRouter>
			</QueryClientProvider>,
		);

		await waitFor(() => {
			const h2Element = screen.getByRole('heading', { level: 2 });
			expect(h2Element).toBeInTheDocument();
		});
	});

	it('displays name for dog card', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockTails />
				</MemoryRouter>
			</QueryClientProvider>,
		);
		const dogError = screen.getByText(/Buddy/i);
		expect(dogError).toBeInTheDocument();
	});

	it('displays gender information for dog card', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockTails />
				</MemoryRouter>
			</QueryClientProvider>,
		);
		const newsError = screen.getByText(/Male/i);
		expect(newsError).toBeInTheDocument();
	});
});
