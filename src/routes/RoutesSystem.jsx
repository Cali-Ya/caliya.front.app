import { createBrowserRouter } from 'react-router-dom';
import { features_pages as Features } from '../features/features_exports';

const indexActive = true;

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <Features.MainDashboard />,
  },
  {
    path: '/:tag_shop',
    element: <Features.store_page.StorePage />,
  },
  {
    path: '/buy_product',
    element: <Features.store_page.BuyProduct />,
  },
  {
    path: '/cart/',
    element: <Features.shopping_cart_page.ShoppingCartPage />,
  },
  {
    path: '/cart/add_direction',
    element: <Features.shopping_cart_page.PurcharseDataForm />,
  },
]);

export default RoutesSystem;
