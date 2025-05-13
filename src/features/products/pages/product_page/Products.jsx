import './ProductsStyle.css';
import ProductCardStandard from '../../product_card/product_card_standard/ProductCardStandard';
import useExpanded from '../../hooks/useExpanded';
import clsx from 'clsx';

const Products = ({ Title, ProductsList }) => {
  const { isExpanded, handleToggleViewProducts } = useExpanded({
    initialValue: false,
  });

  /*  const displayedProducts = isExpanded
    ? ProductsList
    : ProductsList.slice(0, 3); */

  return (
    <section className="products_section">
      <figure className="products_header">
        <h1 className="products_header__title">{Title}</h1>
        <p
          className="products_header__details"
          onClick={handleToggleViewProducts}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </p>
      </figure>
      <figure
        className={clsx('products_list', {
          'products_list--expanded': isExpanded,
          'products_list--collapsed': !isExpanded,
        })}
      >
        {ProductsList &&
          ProductsList.map((product) => (
            <ProductCardStandard
              key={product.id}
              image={product.image}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
      </figure>
    </section>
  );
};

export default Products;
