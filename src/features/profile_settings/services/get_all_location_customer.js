import api from '../../../lib/api';

const register_location_customer = async (
  setLocations,
  setGetLocations,
  getLocations
) => {
  try {
    const response = await api.get('/customers/address');

    if (response.status === 200) {
      setLocations(response.data);

      if (getLocations) {
        setGetLocations(true);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default register_location_customer;
