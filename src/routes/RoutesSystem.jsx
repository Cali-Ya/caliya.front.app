import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/main_layout/MainLayout';
import { features_pages } from '../features/features_exports';

const indexActive = true;

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: indexActive,
        element: <features_pages.product_page.ProductsPage />,
      },
      {
        path: '/add_to_cart',
        element: <features_pages.product_page.ProductSelection />,
      },
    ],
  },
  {
    path: '/order/',
    element: <features_pages.order_page.OrderPage />,

    children: [
      {
        index: indexActive,
        element: <features_pages.order_page.CartStorePage />,
      },
      {
        path: 'purcharse_data_form',
        element: <features_pages.order_page.PurcharseDataForm />,
      },
    ],
  },
]);

export default RoutesSystem;
