import { create } from 'zustand';

const getCartFromStorage = () => {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
};

const useCartStore = create((set, get) => ({
  cart: getCartFromStorage(),

  addItem: (newItem) =>
    set((state) => {
      const exists = state.cart.find(
        (item) =>
          item.id === newItem.id &&
          JSON.stringify(item.additionals) === JSON.stringify(newItem.additionals) &&
          item.observation === newItem.observation
      );
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === newItem.id &&
            JSON.stringify(item.additionals) === JSON.stringify(newItem.additionals) &&
            item.observation === newItem.observation
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...newItem, quantity: 1 }] };
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

  removeShopItems: (shopId) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.shopInfo?.id !== shopId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    }),

  getTotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;
