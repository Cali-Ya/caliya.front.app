//products
import ProductsPage from './products/pages/products_page/ProductsPage';
import ProductSelection from './products/layout/product_selection/ProductSelection';

//order
import CartStorePage from './order/modules/cart_store/CartStorePage';
import PurcharseDataForm from './order/modules/purcharse_data_form/PurcharseDataForm';
import OrderPage from './order/page/OrderPage';

export const features_pages = {
  product_page: {
    ProductsPage,
    ProductSelection,
  },

  order_page: {
    OrderPage,
    CartStorePage,
    PurcharseDataForm,
  },
};
