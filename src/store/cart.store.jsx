import { create } from 'zustand';

const getCartFromStorage = () => {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
};

const useCartStore = create((set, get) => ({
  cart: getCartFromStorage(),

  addItem: (product) =>
    set((state) => {
      const additionalsKey = (product.additionals || []).sort().join(',');
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.id === product.id &&
          (item.additionals || []).sort().join(',') === additionalsKey
      );
      let newCart;
      if (existingIndex !== -1) {
        newCart = [...state.cart];
        newCart[existingIndex].quantity =
          (newCart[existingIndex].quantity || 1) + 1;
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }
      // Guarda en localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    }),

  removeProductList: (item) => {
    set((state) => {
      const additionalsKey = (item.additionals || []).sort().join(',');
      const existingIndex = state.cart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          (cartItem.additionals || []).sort().join(',') === additionalsKey
      );
      let newCart = [...state.cart];
      if (existingIndex !== -1) {
        if (newCart[existingIndex].quantity > 1) {
          newCart[existingIndex].quantity -= 1;
        } else {
          newCart = newCart.filter((_, idx) => idx !== existingIndex);
        }
      }
      // Guarda en localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  clearCart: () => {
    localStorage.setItem('cart', JSON.stringify([]));
    set({ cart: [] });
  },

  getTotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;
