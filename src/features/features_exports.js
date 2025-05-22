// main dashabord
import MainDashboard from '../pages/main_dashaboard/MainDashboard';
//stores
import ProductsPage from './products/pages/products_page/ProductsPage';
import ProductSelection from './products/layout/product_selection/ProductSelection';

//shopping cart
import CartStorePage from './order/modules/cart_store/CartStorePage';
import PurcharseDataForm from './order/modules/purcharse_data_form/PurcharseDataForm';
import OrderPage from './order/page/OrderPage';

export const features_pages = {
  MainDashboard,

  store_page: {
    ProductsPage,
    ProductSelection,
  },

  shopping_cart_page: {
    OrderPage,
    CartStorePage,
    PurcharseDataForm,
  },
};
