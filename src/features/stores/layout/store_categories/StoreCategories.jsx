//css
import './store_categories.css';
//icons
import { MdOutlineFastfood, MdStarOutline } from 'react-icons/md';
//components
import StoreProductCardMedium from '../../components/store_product_cards/store_product_card_medium/StoreProductCardMedium';
import HeaderCategoryList from '../../components/header_category_list/HeaderCategoryList';
import StoreCardFoodList from '../../components/store_card_food_list/StoreCardFoodList';

const StoreCategories = () => {
  const ProductsTest = {
    id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
    name: 'D.M.O Delicias',
    logo_image:
      'https://res.cloudinary.com/dropks6mh/image/upload/v1747112944/ChatGPT_Image_12_may_2025_09_29_12_p.m._zx79j0.png',
    home_phone: '+573104305553',
    address: 'Cl. 72u #26q-2 a 26q-38, Cali, Valle del Cauca',
    latitude: 3.419142,
    longitude: -76.498426,
    type: 'restaurant',
    categories: [
      {
        id: '783ffad7-c861-4548-898c-70b145a89926',
        shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
        name: 'Salchipapas',
        items: [
          {
            id: '1b7798e8-f448-441e-ac06-0c9d3d017ca9',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Salchipapa Sencilla Pequeña',
            price: 6000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747321566/salchi-sencilla-dmo_ugxmh8.png',
            description: 'Papa, Salchicha, Salsas. ',
          },
          {
            id: '1b7798e8-f448-441e-ac06-0c9d3d017ca9',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Salchipapa Sencilla Pequeña',
            price: 6000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747321566/salchi-sencilla-dmo_ugxmh8.png',
            description: 'Papa, Salchicha, Salsas. ',
          },
          {
            id: '1b7798e8-f448-441e-ac06-0c9d3d017ca9',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Salchipapa Sencilla Pequeña',
            price: 6000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747321566/salchi-sencilla-dmo_ugxmh8.png',
            description: 'Papa, Salchicha, Salsas. ',
          },
        ],
      },
      {
        id: '00aaf1a4-5ce2-44c9-b74f-42ed84189c12',
        shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
        name: 'Perros Calientes',
        items: [
          {
            id: 'd2bef2d8-f852-4f49-ac78-f80c537aaade',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Perro Sencillo',
            price: 9000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747322746/perro-sencillo-dmo_djhmeo.jpg',
            description: 'Queso, Ripio, Salchicha, Cebolla, Salsas.',
          },
          {
            id: 'c086798e-74de-4156-bfbe-e43d233729fa',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Perro Espeecial',
            price: 11000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747326440/perro-especial-dmo_zv71do.png',
            description: 'Tocineta, Cebolla, Queso, Ripio, Salsas.',
          },
        ],
      },
      {
        id: 'df0b89f7-d866-42ca-b80b-cc9b390a434d',
        shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
        name: 'Hamburguesas',
        items: [
          {
            id: 'a86ccd16-6e2a-48af-89fe-956724c74de3',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Hamburguesa Sencilla',
            price: 9000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747326439/hamburguesa-sencilla-dmo_va2ni4.jpg',
            description:
              'Carne, Jamón, Queso, Tocineta, Ripio, Lechuga, Salsas.',
          },
          {
            id: '5969793f-dd99-455e-9d06-40217fb45dac',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Hamburguesa Gratinada',
            price: 11000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747326440/hambuerguesa-gratinada-dmo_kkpgtp.jpg',
            description:
              'Carne, Jamón, Triple Queso Grartinado, Tocineta, Ripio, Lechuga, Salsas.',
          },
          {
            id: '23c37218-4a41-429e-ae09-ea977c8e996e',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Hamburguesa Doble Carne',
            price: 14000,
            image:
              'https://res.cloudinary.com/dropks6mh/image/upload/v1747326440/Hamburguesa-doble-carne-dmo_tw6cun.jpg',
            description:
              'Doble Carne, Jamón, Queso, Tocineta, Ripio, Lechuga, Salsas, Doble Carne, Jamón, Queso, Tocineta, Ripio, Lechuga, Salsas., Doble Carne, Jamón, Queso, Tocineta, Ripio, Lechuga, Salsas.',
          },
          {
            id: '7fc3533b-e916-4512-b781-f17bb82cfd43',
            shop_id: 'e3388b60-0b04-4900-9d2b-1b07639a1d9b',
            name: 'Hamburguesa Mixta',
            price: 15000,
            image: '',
            description:
              'Carne, Pollo, Jamón, Queso, Tocineta, Ripio, Lechuga, Salsas.',
          },
        ],
      },
    ],
  };

  const size_details = {
    size_title: '1.1rem',
    size_description: '.9rem',
    size_price: '1rem',
  };

  return (
    <section className="container_store_categories">
      {/* categories */}

      {/* promotions */}
      <div className="container_promotions_category container_category">
        {/* header */}
        <HeaderCategoryList title="Promociones" />

        {/* category list */}
        <ul className="list_promotions_category_list list_categories_list">
          {ProductsTest.categories.map((category) =>
            category.items.map((product, index) => (
              <StoreProductCardMedium
                key={product.id + index}
                id={product.id}
                icon={MdOutlineFastfood}
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
      </div>

      {/* Favorites */}
      <div className="container_favorites_category container_category">
        {/* header */}
        <HeaderCategoryList title="Favoritos" />

        {/* category list */}
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
      </div>

      {/* Recomendados */}
      <div className="container_favorites_category container_category">
        {/* header */}
        <HeaderCategoryList title="Recomendados" />

        {/* category list */}
        <ul className="list_recommended_category_list">
          {ProductsTest.categories.map((category) =>
            category.items.map((product, index) => (
              <StoreCardFoodList
                key={product.id + index}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                prev_price={product.price}
              />
            ))
          )}
        </ul>
      </div>
    </section>
    /* </section> */
  );
};

export default StoreCategories;
