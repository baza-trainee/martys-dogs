import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About/About';
import AdminDogs from './pages/AdminDogs/AdminDogs';
import AdminHomeLayout from './layout/AdminHomeLayout/AdminHomeLayout';
import AdminNews from './pages/AdminsNews/AdminNews';
import AdminNumbers from './pages/AdminNumbers/AdminNumbers';
import AdminPartners from './pages/AdminPartners/AdminPartners';
import AdminPhotos from './pages/AdminPhotos/AdminPhotos';
import Admins from './pages/Admins/Admins';
import { AuthProvider } from './context/AuthContext';
import Contacts from './pages/Contacts/Contacts';
import Error from './pages/Error/Error';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import { ModalProvider } from './context/ModalContext';
import OurTails from './pages/OurTails/OurTails';
import Register from './pages/Register/Register';

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
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: 'admin',
		element: <AdminHomeLayout />,
		children: [
			{
				index: true,
				element: <AdminDogs />,
			},
			{
				path: 'partners',
				element: <AdminPartners />,
			},
			{
				path: 'news',
				element: <AdminNews />,
			},
			{
				path: 'numbers',
				element: <AdminNumbers />,
			},
			{
				path: 'photos',
				element: <AdminPhotos />,
			},
			{
				path: 'pass',
				element: <Admins />,
			},
		],
	},
]);

const App = () => {
	return (
		<AuthProvider>
			<ModalProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ModalProvider>
		</AuthProvider>
	);
};

export default App;
