import api from '../../../lib/api';

const getAllCategories = async (setShop, tag_shop) => {
  try {
    const response = await api.get(`/shops?tag=${tag_shop}`);

    if (response.status === 200) {
      const categories = response.data;
      setShop(categories);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllCategories;
