import './ProductsStyle.css';
import ProductCardStandard from '../../components/product_card/product_card_standard/ProductCardStandard';
import useExpanded from '../../hooks/useExpanded';
import clsx from 'clsx';

const Products = ({ Title, ProductsList }) => {
  const { isExpanded, handleToggleViewProducts } = useExpanded({
    initialValue: false,
  });

  /*  const displayedProducts = isExpanded
    ? ProductsList
    : ProductsList.slice(0, 3);

  const isExpandedElipsis = true;

  const size_details = {
    size_title: '1.1rem',
    size_description: '.9rem',
    size_price: '1rem',
  };

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
        {displayedProducts.map((product, index) => (
          <ProductCardStandard
            key={index}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
            activeElipsis={isExpandedElipsis}
            size_title={size_details.size_title}
            size_description={size_details.size_description}
            size_price={size_details.size_price}
          />
        ))}
      </figure>
    </section>
  );
};

export default Products;
