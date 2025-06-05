import api from '../../../lib/api';

const getAdditionals = async (setAdditionals, shop_id) => {
  try {
    const response = await api.get(
      `/products/adiciones?category_id=${shop_id}`
    );

    if (response.status === 200) {
      const data = response.data;
      setAdditionals(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAdditionals;
