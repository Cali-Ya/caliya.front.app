import api from '../../../lib/api';

const getAllCategories = async (setShop, shop_id) => {
  try {
    const response = await api.get(`/shops?id=${shop_id}`);

    if (response.status === 200) {
      const categories = response.data;
      setShop(categories);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllCategories;
