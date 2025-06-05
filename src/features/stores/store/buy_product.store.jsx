import { create } from 'zustand';

const useBuyProduct = create((set) => ({
  //buy product
  purcharseInformationProduct: {
    id: '',
    category_id: '',
    name: '',
    description: '',
    price: 0,
    prev_price: 0,
    image: '',
  },
  setPurcharseInformationProduct: (product) =>
    set(() => ({
      purcharseInformationProduct: {
        id: product.id,
        category_id: product.category_id,
        name: product.name,
        description: product.description,
        price: product.price,
        prev_price: product.prev_price,
        image: product.image,
      },
    })),

  //toggle page buy product
  togglePageBuyProduct: false,
  setTogglePageBuyProduct: (value) =>
    set(() => ({
      cardProductSelection: value,
    })),
}));

export default useBuyProduct;
