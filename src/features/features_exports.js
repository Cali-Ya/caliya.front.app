// main dashabord
import MainDashboard from '../pages/main_dashaboard/MainDashboard';
//stores
import StorePage from './stores/pages/store_page/StorePage';
import BuyProduct from './stores/layout/buy_product/BuyProduct';

//shopping cart
import ShoppingCartPage from './shopping_cart/page/ShoppingCartPage';
import PurcharseDataForm from './shopping_cart/layout/purcharse_data_form/PurcharseDataForm';

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
};
