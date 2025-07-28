//caliApi
import api from '../../../../lib/api';

const login_customers = async (data, navigate) => {
  try {
    const response = api.post('/login', data);

    const responseOK = 200;
    if (response.ok === responseOK) {
      navigate('/');
    }
  } catch (error) {
    console.log(error);
  }
};

export default login_customers;
