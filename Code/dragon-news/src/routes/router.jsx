import { createBrowserRouter } from 'react-router';
import Home from '../Components/Home';
import Auth from '../Components/Auth';
import News from '../Components/News';
import NotFound from '../Components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;
