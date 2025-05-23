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

  removeItemQuantity: (product) =>
    set((state) => {
      const cart = state.cart
        .map((item) => {
          // Comparar id y adicionales
          if (
            item.id === product.id &&
            JSON.stringify(item.additionals) ===
              JSON.stringify(product.additionals)
          ) {
            // Si la cantidad es 1, lo elimina
            if (item.quantity <= 1) return null;
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(Boolean);
      return { cart };
    }),

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
