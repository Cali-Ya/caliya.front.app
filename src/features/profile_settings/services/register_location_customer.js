import api from '../../../lib/api';

const register_location_customer = async (data, setToggleSpinner) => {
  setToggleSpinner(true);
  try {
    const response = await api.post('/customers/address', data);

    console.log(response); /* 
    if (response.ok === 201) {
    } */
  } catch (error) {
    console.log(error);
  } finally {
    setToggleSpinner(false);
  }
};

export default register_location_customer;
