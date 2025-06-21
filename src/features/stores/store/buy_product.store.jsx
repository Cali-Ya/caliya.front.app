import { create } from 'zustand';

const useBuyProduct = create((set) => ({
  //buy product
  purcharseInformationProduct: {
    id: '',
    shopInfo: {},
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
        shopInfo: product.shopInfo,
        category_id: product.category_id,
        name: product.name,
        description: product.description,
        price: product.price,
        prev_price: product.prev_price,
        image: product.image,
      },
    })),
}));

export default useBuyProduct;
