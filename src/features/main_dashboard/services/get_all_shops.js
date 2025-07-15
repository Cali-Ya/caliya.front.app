//api
import api from '../../../lib/api';

const getAllShops = async (setShops) => {
  try {
    //requests
    const response = await api.get('/shops/all');
    const shops = response.data;

    //add shops
    if (response.status === 200) {
      setShops(shops);

      return;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllShops;
