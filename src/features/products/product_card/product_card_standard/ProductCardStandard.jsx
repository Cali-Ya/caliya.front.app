import './ProductCardStandardStyle.css';

const ProductCardStandard = ({ image, title, description, price }) => {
  return (
    <section className="product_card_standard">
      <figure className="product_card_standard__image">
        <img src={image} />
      </figure>
      <div className="product_card_standard__details">
        <h2 className="product_card_standard__title">{title}</h2>
        <p className="product_card_standard__description">{description}</p>

        <div className="produc_card_standard__details_extra">
          {/*   <p className="product_card_standard__details_extra__title">{Price}</p> */}
          {/*  <p className="product_card_standard__details_extra__description"></p> */}
          <span className="product_card_standard__price">
            {new Intl.NumberFormat('es-CO').format(price)} COP
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductCardStandard;
