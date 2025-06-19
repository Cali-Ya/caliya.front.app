//css
import './product_card_medium.css';
//components
import CardDetails from '../card_details/CardDetails';
import IconAddShoppingCard from '../../icons/IconAddShoppingCard';
//lib
import useHandleBuyProduct from '../../../lib/shared/useHandleBuyProduct';

const ProductCardMedium = ({
  id,
  category_id,
  icon,
  image,
  name,
  description,
  price,
  prev_price,
  activeElipsis,
  size_title,
  size_description,
  size_price,
}) => {
  //handle buy product
  const purcharse_product_information = {
    id,
    category_id,
    name,
    description,
    image,
    price,
    prev_price,
  };

  const handleBuyProduct = useHandleBuyProduct();

  return (
    <li
      className="container_product_card_medium"
      onClick={() => handleBuyProduct(purcharse_product_information)}
    >
      <figure className="container_image_card_medium">
        <img src={image} alt={image} className="image_card_medium" />
        <IconAddShoppingCard />
      </figure>

      <article className="container_details_product_card_medium">
        {/*   <p className="discount_product_card_medium">60% cada 3 compras</p> */}

        <CardDetails
          title={name}
          description={description}
          price={price}
          prev_price={prev_price}
          activeElipsis={activeElipsis}
          size_title={size_title}
          size_description={size_description}
          size_price={size_price}
          with_price="100%"
          icon={icon}
        />
      </article>
    </li>
  );
};

export default ProductCardMedium;
