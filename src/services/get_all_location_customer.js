import api from '../lib/api';

const get_all_location_customer = async (setLocations, setGetLocations) => {
  try {
    const response = await api.get('/customers/address');

    if (response.status === 200) {
      setLocations(response.data || []);
    } else {
      setLocations([]);
    }
  } catch (error) {
    setLocations([]); // En caso de error, asegura array vacío
    console.log(error);
  } finally {
    setGetLocations(true); // Siempre marca como finalizada la petición
  }
};

export default get_all_location_customer;
