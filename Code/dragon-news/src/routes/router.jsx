import { createBrowserRouter } from 'react-router';
import Auth from '../Components/Auth';
import News from '../Components/News';
import NotFound from '../Components/NotFound';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from './CategoryNews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/auth', element: <Auth /> },
      {
        path: '/category/:id',
        element: <CategoryNews />,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
