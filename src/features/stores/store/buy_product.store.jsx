import { create } from 'zustand';

const useBuyProduct = create((set) => ({
  //buy product
  purcharseInformationProduct: {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
  },
  setPurcharseInformationProduct: (product) =>
    set(() => ({
      purcharse_information_product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
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
