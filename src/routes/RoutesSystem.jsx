import { createBrowserRouter } from 'react-router-dom';
import { features_pages as Features } from '../features/features_exports';
import MainPage from '../pages/MainPage';
import TapBar from '../components/bars/tap_bar/TapBar';

const indexActive = true;

const RoutesSystem = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,

    children: [
      {
        index: indexActive,
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
      {
        path: '/auth/sign_up',
        element: <Features.register_customers.RegisterCustomers />,
      },
      {
        path: '/auth/login',
        element: <h1>Inicia Seccion</h1>,
      },
      {
        path: '/account_settings',
        element: <TapBar />,
      },
    ],
  },
]);

export default RoutesSystem;
