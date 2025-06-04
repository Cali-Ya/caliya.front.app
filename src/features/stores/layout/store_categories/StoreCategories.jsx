//css
import './store_categories.css';
//icons
import { MdOutlineFastfood } from 'react-icons/md';
//components
import HeaderCategoryList from '../../components/header_category_list/HeaderCategoryList';
import StoreCardFoodList from '../../components/store_card_food_list/StoreCardFoodList';
import StoreProductCardMedium from '../../components/store_product_cards/store_product_card_medium/StoreProductCardMedium';

const StoreCategories = ({ allCategories }) => {
  const size_details = {
    size_title: '1.1rem',
    size_description: '.9rem',
    size_price: '1rem',
  };

  //const

  const combos = 'Combos';

  console.log(allCategories[0]);

  return (
    <section className="container_store_categories">
      {/* categories */}

      {/* combos */}
      <div className="container_promotions_category container_category">
        {/* header */}
        <HeaderCategoryList title="Promociones" />

        {/* combos list */}
        <ul className="list_combos_category_list list_categories_list">
          {allCategories
            .filter(
              (category) =>
                category.name === combos && Array.isArray(category.items)
            )
            .flatMap((category) =>
              category.items.map((combo) => (
                <StoreProductCardMedium
                  key={combo.id}
                  id={combo.id}
                  icon={MdOutlineFastfood}
                  image={combo.logo_image}
                  name={combo.name}
                  description={combo.description}
                  price={combo.price}
                  prev_price={combo.prev_price}
                  size_title={size_details.size_title}
                  size_description={size_details.size_description}
                  size_price={size_details.size_price}
                />
              ))
            )}
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
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                  />
                ))
              : null
          ) || []}
        </ul>
      </div>
    </section>
    /* </section> */
  );
};

export default StoreCategories;
