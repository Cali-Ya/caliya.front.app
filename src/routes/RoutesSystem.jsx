import { createBrowserRouter } from 'react-router-dom';
import { features_pages as Features } from '../features/features_exports';

const indexActive = true;

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <Features.MainDashboard />,
    /*  children: [
      {
        index: indexActive,
        element: <Features.product_page.ProductsPage />,
      },
      {
        path: '/add_to_cart',
        element: <Features.product_page.ProductSelection />,
      },
    ],
  },
  {
    path: '/order/',
    element: <Features.order_page.OrderPage />,

    children: [
      {
        index: indexActive,
        element: <Features.order_page.CartStorePage />,
      },
      {
        path: 'purcharse_data_form',
        element: <Features.order_page.PurcharseDataForm />,
      },
    ], */
  },
]);

export default RoutesSystem;
