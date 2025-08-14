import api from '../../../lib/api';

export const register_location_customer = async (data, setToggleSpinner) => {
  setToggleSpinner(true);
  try {
    await api.post('/customers/address', data);
  } catch (error) {
    console.log(error);
  } finally {
    setToggleSpinner(false);
  }
};

export const delete_location_customer = async (id) => {
  try {
    await api.delete(`/customers/address/${id}`);
  } catch (error) {
    console.log(error);
  }
};
