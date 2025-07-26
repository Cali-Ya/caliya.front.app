// main dashabord
import MainDashboard from '../pages/main_dashaboard/MainDashboard';
//stores
import StorePage from './stores/pages/store_page/StorePage';
import BuyProduct from './stores/layout/buy_product/BuyProduct';

//shopping cart
import ShoppingCartPage from './shopping_cart/page/ShoppingCartPage';
import PurcharseDataForm from './shopping_cart/layout/purcharse_data_form/PurcharseDataForm';

//register customers
import RegisterCustomers from './auth/register_customers/page/RegisterCustomers';

//profile settings
import ProfileSettingsPage from './profile_settings/page/ProfileSettingsPage';
import ProfileInformation from './profile_settings/layouts/profile_information/ProfileInformation';
import ChangePassword from './profile_settings/layouts/change_password/ChangePassword';
import CustomerLocations from './profile_settings/layouts/customer_locations/CustomerLocations';

export const features_pages = {
  MainDashboard,

  store_page: {
    StorePage,
    BuyProduct,
  },

  shopping_cart_page: {
    ShoppingCartPage,
    PurcharseDataForm,
  },

  register_customers: {
    RegisterCustomers,
  },

  profile_settings: {
    ProfileSettingsPage,
    ProfileInformation,
    ChangePassword,
    CustomerLocations,
  },
};
