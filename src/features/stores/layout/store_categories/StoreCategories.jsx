//css
import './store_categories.css';
//components
import HeaderCategoryList from '../../components/header_category_list/HeaderCategoryList';
import StoreCardFoodList from '../../components/store_card_food_list/StoreCardFoodList';
import CombosLayout from '../../../../layout/combos/CombosLayout';

const StoreCategories = ({ allCategories, shopInfo }) => {
  //filtered combos
  const comboFilter = 'Combos';
  const CombosFiltered = allCategories.filter(
    (combo) => combo.name === comboFilter
  );
  const combosItems = CombosFiltered.length > 0 ? CombosFiltered[0].items : [];

  const combosWithShop = combosItems.map((combo) => ({
    ...combo,
    shop: shopInfo, // O usa shopInfo si quieres la misma estructura que MainDashboard
    shopInfo, // O usa shopInfo si tus componentes esperan esa prop
  }));

  return (
    <section className="container_store_categories">
      {/* categories */}

      {/* combos */}
      <div className="container_promotions_category container_category">
        {/* header */}
        <HeaderCategoryList title="Combos" />

        {/* combos list */}
        <ul className="list_combos_category_list list_categories_list">
          {combosItems && <CombosLayout combos={combosWithShop} />}
        </ul>
      </div>

      {/* Favorites */}
      {/* <div className="container_favorites_category container_category">
         header 
         <HeaderCategoryList title="Favoritos" />

        category list
        <ul className="list_promotions_category_list list_categories_list">
           {ProductsTest.categories.map((category) =>
            category.items.map((product, index) => (
              <StoreProductCardMedium
                key={product.id + index}
                id={product.id}
                icon={MdStarOutline}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                prev_price={product.price}
                size_title={size_details.size_title}
                size_description={size_details.size_description}
                size_price={size_details.size_price}
              />
            ))
          )}
        </ul>
      </div> */}

      {/* All categories */}
      <div className="container_all_categories container_category">
        {/* header */}

        <HeaderCategoryList title="Recomendados" />

        <ul className="list_recommended_category_list">
          {allCategories?.map((category) =>
            Array.isArray(category.items)
              ? category.items.map((product, index) => (
                  <StoreCardFoodList
                    key={product.id + index}
                    id={product.id}
                    category_id={category.id}
                    shopInfo={shopInfo}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    score={product.score}
                  />
                ))
              : null
          ) || []}
        </ul>
      </div>
    </section>
  );
};

export default StoreCategories;
