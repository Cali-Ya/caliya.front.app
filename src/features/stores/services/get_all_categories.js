import api from '../../../lib/api';

const getAllCategories = async (setShop, tag_shop, setStateCaliyaLoader) => {
  try {
    //loader
    const activeLoader = true;
    setStateCaliyaLoader(activeLoader);

    //request
    const response = await api.get(`/shops?tag=${tag_shop}`);

    if (response.status === 200) {
      const categories = response.data;
      setShop(categories);

      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    const desactiveLoader = false;
    setStateCaliyaLoader(desactiveLoader);
  }
};

export default getAllCategories;
