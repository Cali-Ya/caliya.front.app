// main dashabord
import MainDashboard from '../pages/main_dashaboard/MainDashboard';
//stores
import StorePage from './stores/pages/store_page/StorePage';
import BuyProduct from './stores/layout/buy_product/BuyProduct';

//shopping cart
import CartStorePage from './shopping_cart/modules/cart_store/CartStorePage';
import PurcharseDataForm from './shopping_cart/modules/purcharse_data_form/PurcharseDataForm';
import OrderPage from './shopping_cart/page/OrderPage';

export const features_pages = {
  MainDashboard,

  store_page: {
    StorePage,
    BuyProduct,
  },

  shopping_cart_page: {
    OrderPage,
    CartStorePage,
    PurcharseDataForm,
  },
};
