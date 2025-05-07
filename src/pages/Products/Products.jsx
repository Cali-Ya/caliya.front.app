import './ProductsStyle.css';

const Products = ({ Title, ProductList }) => {
  return (
    <section className="products_section">
      <figure className="products_title">
        <h1>{Title}</h1>
        <p>Ver todo</p>
      </figure>
      <figure className="products_list">
        {ProductList.map((product, index) => (
          <div className="product_card" key={index}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>${product.price}</span>
          </div>
        ))}
      </figure>
    </section>
  );
};

export default Products;
