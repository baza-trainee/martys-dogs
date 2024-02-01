// import { Meta, StoryFn } from '@storybook/react';
// import Partners, { PartnersProps } from './Partners';

// import { LandingData } from '../../pages/Landing/Landing';
// import Logo1 from '../../assets/partners_about/PurinaLogo.svg';
// import Logo2 from '../../assets/partners_about/RoyalCanineLogo.svg';
// import { fetchHome } from '../../services/fetchData';

// export default {
// 	component: Partners,
// 	title: 'Components/Partners',
// } as Meta;

// const Template: StoryFn<PartnersProps> = (args) => <Partners {...args} />;
// const mockedLandingData: LandingData = {
// 	news: [],
// 	dog_cards: [],
// 	partners: [
// 		{
// 			id: 1,
// 			name: 'Partner1',
// 			logo: {
// 				id: '1',
// 				name: 'LogoPurina',
// 				url: Logo1,
// 				category: 'A',
// 			},
// 		},
// 		{
// 			id: 2,
// 			name: 'Partner2',
// 			logo: {
// 				id: '2',
// 				name: 'LogoCanine',
// 				url: Logo2,
// 				category: 'A',
// 			},
// 		},
// 	],
// };

// export const Loaded: StoryFn<PartnersProps> = Template.bind({});

// Loaded.args = {
// 	data: {
		// isFetching: false,
		// isError: false,
		// error: null,
		// data: mockedLandingData,
		// isStale: false,
		// isPlaceholderData: false,
		// failureCount: 0,
		// refetch: async () => fetchHome(),
	// 	dataUpdatedAt: 0,
	// 	errorUpdatedAt: 0,
	// 	fetchStatus: 'fetching',
	// 	isFetched: true,
	// 	isFetchedAfterMount: true,
	// 	isInitialLoading: false,
	// 	isLoading: false,
	// 	isLoadingError: false,
	// 	isPaused: false,
	// 	isPending: false,
	// 	isRefetchError: false,
	// 	isRefetching: false,
	// 	isSuccess: true,
	// 	status: 'success',
	// 	failureReason: null,
	// 	errorUpdateCount: 0,
	// },
// };
