import api from '../../../../lib/api';

const register_customer = async (data) => {
  try {
    const response = await api.post('/customers', data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default register_customer;
