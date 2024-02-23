import { MemoryRouter } from 'react-router-dom';
import {
	QueryClient,
	QueryClientProvider,
	UseQueryResult,
	useQuery,
} from '@tanstack/react-query';

import Photos from './Photos';
import { AboutData } from '../../pages/About/About';
import { render, screen, waitFor } from '../../utils/test-utils';

export const mockAboutData: AboutData[] = [
	{
		quantity_of_animals: 100,
		quantity_of_employees: 20,
		quantity_of_succeeds_adoptions: 50,
		images: [
			{
				id: '1',
				name: 'Animal Shelter Exterior',
				url: 'https://example.com/animal-shelter-exterior.jpg',
				category: 'Exterior',
			},
			{
				id: '2',
				name: 'Happy Pets Adoption Event',
				url: 'https://example.com/happy-pets-adoption-event.jpg',
				category: 'Event',
			},
		],
	},
];

const MockPhotos: React.FC = () => {
	const mockQueryResult: UseQueryResult<AboutData[], Error> = useQuery({
		queryKey: ['about'],
		queryFn: async () => mockAboutData,
	});

	return <Photos data={mockQueryResult} />;
};

const queryClient = new QueryClient();

describe('Photos component tests', () => {
	it('contains h2 element', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockPhotos />
				</MemoryRouter>
			</QueryClientProvider>,
		);

		await waitFor(() => {
			const h2Element = screen.getByRole('heading', { level: 2 });
			expect(h2Element).toBeInTheDocument();
		});
	});

	it('display contains the first image', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockPhotos />
				</MemoryRouter>
			</QueryClientProvider>,
		);
		await waitFor(() => {
			const image = screen.getByAltText('Animal Shelter Exterior');
			expect(image).toBeInTheDocument();
		});
	});

	it('display contains the second image', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockPhotos />
				</MemoryRouter>
			</QueryClientProvider>,
		);
		await waitFor(() => {
			const image = screen.getByAltText('Happy Pets Adoption Event');
			expect(image).toBeInTheDocument();
		});
	});
});
