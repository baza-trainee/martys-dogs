import { Meta, StoryFn } from '@storybook/react';
import Partners, { PartnersProps } from './Partners';
import { QueryObserverResult } from '@tanstack/react-query';
import { LandingData } from '../../pages/Landing/Landing';
import { fetchHome } from '../../services/fetchData';

export default {
  component: Partners,
  title: 'Components/Partners',
} as Meta;

const Template: StoryFn<PartnersProps> = (args) => <Partners {...args} />;
const mockedLandingData: LandingData = {
  news: [],
  dog_cards: [],
  partners: [
    {
      id: 1,
      name: 'Partner1',
      logo: {
        id: '1',
        name: 'Logo1',
        url: 'https://picsum.photos/200',
        category: 'A',
      },
	  website:`https://example.com/`
    },
    {
      id: 2,
      name: 'Logo2',
      logo: {
        id: '2',
        name: 'LogoCanine',
        url: 'https://picsum.photos/200',
        category: 'A',
      },
	  website: `https://example.com/`
    },
  ],
};

export const Loaded: StoryFn<PartnersProps> = Template.bind({});
const language = 'en';
Loaded.args = {
  data: {
    isFetching: false,
    isError: false,
    error: null,
    data: mockedLandingData,
    isStale: false,
    isPlaceholderData: false,
    failureCount: 0,
	  refetch: async () => {
		try {
		  const data = await fetchHome(language);
		  return { data } as QueryObserverResult<LandingData, Error>;
		} catch (error) {
		  return { error } as QueryObserverResult<LandingData, Error>;
		}
	  },
    dataUpdatedAt: 0,
    errorUpdatedAt: 0,
    fetchStatus: 'fetching',
    isFetched: true,
    isFetchedAfterMount: true,
    isInitialLoading: false,
    isLoading: false,
    isLoadingError: false,
    isPaused: false,
    isPending: false,
    isRefetchError: false,
    isRefetching: false,
    isSuccess: true,
    status: 'success',
    failureReason: null,
    errorUpdateCount: 0,
  },
};