import useNavigatePage from '../../../../../hooks/useNavigatePage';
import useProductSelection from '../../../store/product_selection.store';
import DetailsProductCard from '../../details_product_card/DetailsProductCard';
import './product_card_standard.css';

const ProductCardStandard = ({
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
      name: title,
      description: description,
      price: price,
      image: image,
    });
    setCardProductSelection(true);
    navigate('/add_to_cart');
  };

  return (
    <section className="product_card_standard" onClick={handleSelectProduct}>
      <figure className="product_card_standard__image">
        <img src={image} />
      </figure>
      <DetailsProductCard
        title={title}
        description={description}
        price={price}
        activeElipsis={activeElipsis}
        size_title={size_title}
        size_description={size_description}
        size_price={size_price}
      />
    </section>
  );
};

export default ProductCardStandard;
