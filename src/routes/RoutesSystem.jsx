import { createBrowserRouter } from 'react-router-dom';
import { features_pages as Features } from '../features/features_exports';

const indexActive = true;

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
    path: '/buy_product',
    element: <Features.store_page.BuyProduct />,
  },
  {
    path: '/cart/',
    element: <Features.shopping_cart_page.OrderPage />,

    children: [
      {
        index: indexActive,
        element: <Features.shopping_cart_page.CartStorePage />,
      },
      {
        path: 'purcharse_data_form',
        element: <Features.shopping_cart_page.PurcharseDataForm />,
      },
    ],
  },
]);

export default RoutesSystem;
