import api from '../../../lib/api';

const getAllCategories = async (setShop, shop_id) => {
  try {
    const response = await api.get(`/shops?id=${shop_id}`);

    if (response.status === 200) {
      const data = response.data;
      setShop(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllCategories;
