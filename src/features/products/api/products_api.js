import api from '../../../lib/api';

export const fecthProducts = async (setProducts) => {
  try {
    const response = await api.get('/products/all');
    setProducts(response.data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
