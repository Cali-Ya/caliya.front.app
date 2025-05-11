import './ProductCardStandardStyle.css';

const ProductCardStandard = ({ Image, Title, Description, Price }) => {
  return (
    <section className="product_card_standard">
      <figure className="product_card_standard__image">
        <img src={Image} />
      </figure>
      <div className="product_card_standard__details">
        <h2 className="product_card_standard__title">{Title}</h2>
        <p className="product_card_standard__description">{Description}</p>

        <div className="produc_card_standard__details_extra">
          {/*   <p className="product_card_standard__details_extra__title">{Price}</p> */}
          {/*  <p className="product_card_standard__details_extra__description"></p> */}
          <span className="product_card_standard__price">{Price}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCardStandard;
