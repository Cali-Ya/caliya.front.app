import { create } from 'zustand';

const getCartFromStorage = () => {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
};

const useCartStore = create((set, get) => ({
  cart: getCartFromStorage(),

  addItem: (product) =>
    set((state) => {
      // Clave única: id + additionals + observation
      const additionalsKey = (product.additionals || []).sort().join(',');
      const observationKey = product.observation?.trim() || '';
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.id === product.id &&
          (item.additionals || []).sort().join(',') === additionalsKey &&
          (item.observation?.trim() || '') === observationKey
      );
      let newCart;
      if (existingIndex !== -1) {
        newCart = [...state.cart];
        newCart[existingIndex].quantity =
          (newCart[existingIndex].quantity || 1) + (product.quantity || 1);
      } else {
        newCart = [
          ...state.cart,
          {
            ...product,
            quantity: product.quantity || 1,
          },
        ];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    }),

  removeItemQuantity: (product) =>
    set((state) => {
      const cart = state.cart
        .map((item) => {
          // Comparar id, adicionales y observación
          if (
            item.id === product.id &&
            JSON.stringify(item.additionals) ===
              JSON.stringify(product.additionals) &&
            (item.observation?.trim() || '') ===
              (product.observation?.trim() || '')
          ) {
            // Si la cantidad es 1, lo elimina
            if (item.quantity <= 1) return null;
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(Boolean);
      localStorage.setItem('cart', JSON.stringify(cart));
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
