import { create } from 'zustand';

const getCartFromStorage = () => {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
};

const useCartStore = create((set, get) => ({
  cart: getCartFromStorage(),

  addItem: (product) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity =
          (updatedCart[existingIndex].quantity || 1) + 1;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removeProductList: (item) => {
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingIndex].quantity > 1) {
          updatedCart[existingIndex].quantity -= 1;
          return { cart: updatedCart };
        } else {
          // Si solo queda uno, lo elimina del carrito
          return {
            cart: updatedCart.filter((cartItem) => cartItem.id !== item.id),
          };
        }
      }
      return { cart: state.cart };
    });
  },

  clearCart: () => {
    set({
      cart: [],
    });
  },

  getTotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  addAdditionalToProduct: (productId, additional) =>
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            additionals: [...(item.additionals || []), additional],
          };
        }
        return item;
      });
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
