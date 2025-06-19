//css
import './combos_layout.css';
//icons
import { MdOutlineFastfood } from 'react-icons/md';
//components
import ProductCardMedium from '../../components/cards/product_card_medium/ProductCardMedium';

const CombosLayout = ({ combos }) => {
  const size_details = {
    size_title: '1.1rem',
    size_description: '.9rem',
    size_price: '1rem',
  };

  console.log(combos);

  return (
    <ul className="container_list_combos_layout">
      {combos.map((combo) =>
        combo.items.map((product, index) => (
          <ProductCardMedium
            key={product.id + index}
            id={product.id}
            category_id={combo.id}
            icon={MdOutlineFastfood}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            activeElipsis="true"
            size_title={size_details.size_title}
            size_description={size_details.size_description}
            size_price={size_details.size_price}
          />
        ))
      )}
    </ul>
  );
};

export default CombosLayout;
