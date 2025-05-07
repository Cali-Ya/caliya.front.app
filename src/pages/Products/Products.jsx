import './ProductsStyle.css';
import ProductCardStandard from '../../components/Cards/ProductoCard/ProductCardStandard/ProductCardStandard';

const Products = ({ Title, ProductList }) => {
  return (
    <section className="products_section">
      <figure className="products_title">
        <h1>{Title}</h1>
        <p>Ver todo</p>
      </figure>
      <figure className="products_list">
        {ProductList.map((product, index) => (
          <>
            <ProductCardStandard
              key={index}
              Image={product.image}
              Title={product.name}
              Description={product.description}
              Price={product.price}
            />
          </>
        ))}
      </figure>
    </section>
  );
};

export default Products;
