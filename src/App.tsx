import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Error from './pages/Error/Error';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import Landing from './pages/Landing/Landing';
import OurTails from './pages/OurTails/OurTails';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contacts',
				element: <Contacts />,
			},
			{
				path: 'tails',
				element: <OurTails />,
			},
		],
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
