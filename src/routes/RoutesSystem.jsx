import { createBrowserRouter } from 'react-router-dom';
import { features_pages as Features } from '../features/features_exports';

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <Features.MainDashboard />,
  },
  {
    path: '/store_page',
    element: <Features.store_page.StorePage />,
  },
  {
    path: '/add_to_cart',
    element: <Features.store_page.ProductSelection />,
  },
  /*  {
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
    ],
  }, */
]);

export default RoutesSystem;
