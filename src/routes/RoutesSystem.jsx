import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);

export default RoutesSystem;
