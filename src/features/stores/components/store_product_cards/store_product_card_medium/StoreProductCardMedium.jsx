//css
import './store_product_card_medium.css';
//icons
import { MdOutlineAddShoppingCart } from 'react-icons/md';
//custom hooks
import useNavigatePage from '../../../../../hooks/useNavigatePage';
import useProductSelection from '../../../store/product_selection.store';
//components
import CardDetails from '../../../../../components/card_details/CardDetails';
import IconAddShoppingCard from '../../icons/IconAddShoppingCard';

const StoreProductCardMedium = ({
  id,
  icon,
  image,
  title,
  description,
  price,
  activeElipsis,
  size_title,
  size_description,
  size_price,
}) => {
  //custom hooks
  const navigate = useNavigatePage();

  //global
  const { setProductSelection, setCardProductSelection } =
    useProductSelection();

  const handleSelectProduct = () => {
    setProductSelection({
      id: id,
      name: title,
      description: description,
      price: price,
      image: image,
    });
    setCardProductSelection(true);
    navigate('/add_to_cart');
  };

  return (
    <li
      className="container_store_product_card_medium"
      onClick={handleSelectProduct}
    >
      <figure className="container_image_store_card_medium">
        <img src={image} alt={image} className="image_store_card_medium" />
        <IconAddShoppingCard />
      </figure>

      <article className="container_details_store_product_card_medium">
        <p className="discount_store_product_card_medium">60% cada 3 compras</p>

        <CardDetails
          title={title}
          description={description}
          price={price}
          prev_price={price}
          activeElipsis={activeElipsis}
          size_title={size_title}
          size_description={size_description}
          size_price={size_price}
          icon={icon}
        />
      </article>
    </li>
  );
};

export default StoreProductCardMedium;
