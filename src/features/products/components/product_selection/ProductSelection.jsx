//css
import './ProductSelectionStyle.css';
import { RxCaretLeft } from 'react-icons/rx';

import ImgTest from '../../../../assets/hamburguesa-test.jpg';
import useProductSelection from '../../modules/product_selection.store';
import clsx from 'clsx';
import DetailsProductCard from '../details_product_card/DetailsProductCard';

const ProductSelection = () => {
  const {
    productSelection,
    cardProductSelection,
    setProductSelection,
    setCardProductSelection,
  } = useProductSelection();

  const handleSelectProduct = () => {
    setCardProductSelection(false);
  };

  return (
    <aside
      className={clsx('product_selection__container', {
        'product_selection__container--active': cardProductSelection,
        'product_selection__container--inactive': !cardProductSelection,
      })}
    >
      <figure className="icon_return_products_section">
        <RxCaretLeft
          className="icon_return_products_section__icon"
          onClick={handleSelectProduct}
        />
      </figure>

      <figure className="image_product_selection_container">
        <img src={ImgTest} alt="" className="image_product_selection" />
      </figure>

      <section className="details_product_selection">
        <DetailsProductCard
          title={productSelection.name}
          description={productSelection.description}
          price={productSelection.price}
        />

        <section className="total_product_selection">
          <p className="total_amount">Cantidad: 2</p>
          <p className="total_price">Total: 11.000 </p>
        </section>
      </section>
    </aside>
  );
};

export default ProductSelection;
