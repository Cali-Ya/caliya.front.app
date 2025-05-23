import { create } from 'zustand';
import api from '../../../lib/api';

const useFetchProducts = create((set) => {
  return {
    products: [],
    loading: false,
    message_error: '',

    getProducts: async () => {
      set({ loading: true, message_error: '' });

      try {
        const response = await api.get('/products/all');
        set({ products: response.data, loading: false });
      } catch (error) {
        set({ message_error: error, loading: false });
      }
    },
  };
});

export default useFetchProducts;
