//api
import api from '../../../lib/api';

const getAllShops = async (setShops) => {
  try {
    const response = await api.get('/shops/all');
    const shops = response.data;
    setShops(shops);
  } catch (error) {
    console.log(error);
  }
};

export default getAllShops;
