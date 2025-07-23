//api
import api from '../../../lib/api';

const getCombos = async (setCombos) => {
  try {
    const response = await api.get('products/category?category=combos');

    //status ok
    const responseOk = 200;
    if (responseOk) {
      const combos = response.data;
      setCombos(combos);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCombos;
