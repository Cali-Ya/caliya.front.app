//css
import './store_page.css';
//custom hooks
import useScroll from '../../../../hooks/useScroll';
import useFetchProducts from '../../store/fetch_products.store';
//layouts
import StoreCategories from '../../../stores/layout/store_categories/StoreCategories';
//react
import { useEffect, useRef } from 'react';
//logos
import { logos } from '../../../../assets/assets_exports';
//components
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import SearchComponent from '../../../../components/search_component/SearchComponent';
//const
import { AllPathRoutes } from '../../../../const/AllPathRoutes';
//react
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '../../../../components/shopping_cart_icon/ShoppingCartIcon';

const ProductsPage = () => {
  //fetch products
  const { products, getProducts } = useFetchProducts();

  //react
  //refs
  const containerRef = useRef(null);

  //navigate
  const navigate = useNavigate();

  //custom hook
  //scrool
  const scrolled = useScroll(10, containerRef);

  //handle navigate return
  const handleNavigate = () => {
    navigate(AllPathRoutes.main_dashboard);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container_store_page" ref={containerRef}>
      {/* poster */}
      <img src={logos.D_M_O.D_M_O_logo} className="poster_store_page" />
      {/* header */}
      <header
        className="header_store_page"
        style={{
          backgroundColor: scrolled
            ? ' var(--active-color-white)'
            : 'transparent',
        }}
      >
        <CaretIconLeft
          preferColor={false}
          className="header_store_page__icon"
          onClick={handleNavigate}
        />
        {scrolled ? <SearchComponent /> : null}
        <ShoppingCartIcon isColor={scrolled} className />
      </header>
      {/* category */}
      <section className="content_store_page">
        {/* header content */}
        <header className="header_content_store_page">
          {/* logo header content store */}
          <img
            src={logos.D_M_O.D_M_O_logo}
            className="logo_header_store_page"
          />

          {/* information store */}
          <article className="information_store">
            <h1 className="name_store">D.M.O Salchipapa</h1>
            <p className="description_store">Vale la pena esperar</p>
          </article>
        </header>

        <StoreCategories />
      </section>
    </section>
  );
};

export default ProductsPage;
