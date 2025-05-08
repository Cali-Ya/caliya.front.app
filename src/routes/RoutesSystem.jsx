import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/main_layout/MainLayout';

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);

export default RoutesSystem;
