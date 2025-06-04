//css
import './store_page.css';
//custom hooks
import useScroll from '../../../../hooks/useScroll';
//layouts
import StoreCategories from '../../../stores/layout/store_categories/StoreCategories';
//react
import { useEffect, useRef, useState } from 'react';
//components
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import SearchComponent from '../../../../components/search_component/SearchComponent';
//const
import { AllPathRoutes } from '../../../../const/AllPathRoutes';
//react
import { useNavigate, useParams } from 'react-router-dom';
import ShoppingCartIcon from '../../../../components/icons/shopping_cart_icon/ShoppingCartIcon';
import getAllCategories from '../../services/get_all_categories';

const StorePage = () => {
  //shop
  const [shop, setShop] = useState({});

  const { shop_id } = useParams();
  useEffect(() => {
    getAllCategories(setShop, shop_id);
  }, [shop_id]);

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

  return (
    <section className="container_store_page" ref={containerRef}>
      {/* poster */}
      <img src={shop.logo_image} className="poster_store_page" />
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
          <img src={shop.logo_image} className="logo_header_store_page" />

          {/* information store */}
          <article className="information_store">
            <h1 className="name_store">{shop.name}</h1>
            <p className="description_store">{shop.address}</p>
          </article>
        </header>

        <StoreCategories allCategories={shop?.categories || []} />
      </section>
    </section>
  );
};

export default StorePage;
