import api from '../../../lib/api';

const logout_customer = async (navigate) => {
  try {
    const response = await api.delete('sessions');
    if (response.status === 200) {
      navigate('/auth/login');
    }
  } catch (error) {
    console.log(error);
  }
};

export default logout_customer;
