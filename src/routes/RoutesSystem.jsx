import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/main_layout/MainLayout';
import { features_pages } from '../features/features_exports';

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <features_pages.ProductsPage />,
      },
      {
        path: '/add_to_cart',
        element: <features_pages.ProductSelection />,
      },
    ],
  },
  {
    path: '/cart_store',
    element: <features_pages.CartStorePage />,
  },
]);

export default RoutesSystem;
