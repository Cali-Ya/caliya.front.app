import ImgTest from '../../../../assets/hamburguesa-test.jpg';

const ProductSelection = () => {
  return (
    <aside className="product_selection__container">
      <img src={ImgTest} alt="" className="product_selection_img" />
      <h2 className="product_selection_title">Hamburgesa</h2>
      <p className="product_selection_description">
        Hamburgesa todo terreno D.M.O
      </p>
      <span className="product_selection_price">12.4$</span>
    </aside>
  );
};

export default ProductSelection;
