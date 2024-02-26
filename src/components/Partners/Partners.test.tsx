import {
	QueryClient,
	QueryClientProvider,
	UseQueryResult,
	useQuery,
} from '@tanstack/react-query';
import { render, screen, waitFor } from '../../utils/test-utils';
import { describe, it, expect } from 'vitest';
import { LandingData } from '../../pages/Landing/Landing';
import { MemoryRouter } from 'react-router-dom';
import Partners from './Partners';
  
  const mockQueryData: LandingData = {
	news: [],
	dog_cards: [],
	partners: [
	  {
		id: 1,
		name: "Misto dobra",
		logo: {
		  id: "1",
		  name: "partner1_img",
		  url: 'https://fake.com/partner-photo1.jpg',
		  category: "image"
		},
		website: `http://www.example1.com`
	  },
	  {
		id: 2,
		name: "Purina",
		logo: {
		  id: "2",
		  name: "partner2_img",
		  url: 'https://fake.com/partner-photo2.jpg',
		  category: "image"
		},
		website: `http://www.example2.com`
	  },
	 
	]
  };
  
  const MockPartners: React.FC = () => {
	const mockQueryResult: UseQueryResult<LandingData, Error> = useQuery({
	  queryKey: ['landing'],
	  queryFn: async () => mockQueryData,
	});
  
	return <Partners data={mockQueryResult} />;
  };
  
  const queryClient = new QueryClient();
  
  describe('Partners Component Tests', () => {
	it('contains a heading', async () => {
	  render(
		<QueryClientProvider client={queryClient}>
		  <MemoryRouter>
			<MockPartners />
		  </MemoryRouter>
		</QueryClientProvider>,
	  );
  
	  await waitFor(() => {
		const heading = screen.getByRole('heading', { level: 2 });
		expect(heading).toBeInTheDocument();
	  });
	});

	it('contains list of partners', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<MockPartners   />
				</MemoryRouter>
			</QueryClientProvider>,
		);
		const partnersList = screen.getByRole('list');
		const partnersItems = screen.getAllByRole('listitem');
		expect(partnersList).toBeInTheDocument();
		partnersItems.forEach((item) => {
			expect(item).toBeInTheDocument();
		});
		expect(partnersList).toContainElement(partnersItems[0]); 
		expect(partnersItems.length).toBeGreaterThan(0);
	});
  
	it('should display the logo image with correct attributes', () => {
	  render(
		<QueryClientProvider client={queryClient}>
		  <MemoryRouter>
			<MockPartners />
		  </MemoryRouter>
		</QueryClientProvider>,
	  );
  
	  const logoImage = screen.getByAltText(/Logo partner1_img/i) as HTMLImageElement;
	  expect(logoImage).toBeInTheDocument();
	  expect(logoImage.src).toBe('https://fake.com/partner-photo1.jpg');
	});
  });