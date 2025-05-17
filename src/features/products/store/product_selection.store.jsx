import { create } from 'zustand';

const useProductSelection = create((set) => ({
  productSelection: {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
  },
  setProductSelection: (product) =>
    set(() => ({
      productSelection: {
        id: product.id,
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
