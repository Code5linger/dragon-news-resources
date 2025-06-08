import { createBrowserRouter } from 'react-router'; // use 'react-router-dom' instead of 'react-router'
import Auth from '../Components/Auth';
import News from '../Components/News';
import NotFound from '../Components/NotFound';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from './CategoryNews';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../pages/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/category/:id',
        element: <CategoryNews />,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
    ],
  },
  {
    path: '/news-details/:id',
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
