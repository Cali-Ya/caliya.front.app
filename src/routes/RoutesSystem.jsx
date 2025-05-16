import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/main_layout/MainLayout';

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);

export default RoutesSystem;
