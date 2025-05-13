import api from '../../../lib/api';

export const fecthProducts = async (setProducts) => {
  try {
    const response = await api.get('/products/all');
    setProducts(response.data.categories);
  } catch (error) {
    console.log(error);
  }
};
