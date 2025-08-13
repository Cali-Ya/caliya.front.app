import api from '../../../lib/api';

const register_location_customer = async (data, setToggleSpinner) => {
  setToggleSpinner(true);
  try {
    await api.post('/customers/address', data);
  } catch (error) {
    console.log(error);
  } finally {
    setToggleSpinner(false);
  }
};

export default register_location_customer;
