//api
import api from '../../../lib/api';
//api paths
import { api_path } from '../const/api_paths';

const getAllShops = async (setShops) => {
  try {
    const response = await api.get(api_path.shops);
    const shops = response.data;
    setShops(shops);
  } catch (error) {
    console.log(error);
  }
};

export default getAllShops;
