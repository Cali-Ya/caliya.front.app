import { createBrowserRouter } from 'react-router-dom';
import { features_pages as Features } from '../features/features_exports';
import MainPage from '../pages/MainPage';
import RedirectPage from '../pages/redirection/RedirectPage';

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
        element: <Features.LoginCustomers />,
      },
      {
        path: '/profile_settings',
        element: <Features.profile_settings.ProfileSettingsPage />,
      },
      {
        path: '/profile_settings/account_information',
        element: <Features.profile_settings.ProfileInformation />,
      },
      {
        path: '/profile_settings/change_password',
        element: <Features.profile_settings.ChangePassword />,
      },
      {
        path: '/profile_settings/my_locations',
        element: <Features.profile_settings.CustomerLocations />,
      },

      /* redirections */
      {
        path: '/redirect/:redirect',
        element: <RedirectPage />,
      },
    ],
  },
]);

export default RoutesSystem;
