import { create } from 'zustand';

const useProductSelection = create((set) => ({
  productSelection: {
    name: '',
    description: '',
    price: 0,
    image: '',
  },
  setProductSelection: (product) =>
    set(() => ({
      productSelection: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      },
    })),
  cardProductSelection: '',
  setCardProductSelection: (value) =>
    set(() => ({
      cardProductSelection: value,
    })),
}));

export default useProductSelection;
