//caliApi
import api from '../../../../lib/api';
import { setEncryptedItem } from '../../../../utils/encryptionUtilities';

const login_customers = async (data, navigate, setToggleSpinner) => {
  // Activa el spinner
  setToggleSpinner(true);
  try {
    const response = await api.post('/customers/sign_in', data);

    const responseOK = 201;
    if (response.status === responseOK) {
      const user_session = 'user_session';
      const userSession = {
        session: true,
        data: response.data,
      };
      setEncryptedItem(user_session, userSession);
      navigate('/');
    }
  } catch (error) {
    console.log(error);
  } finally {
    setToggleSpinner(false);
  }
};

export default login_customers;
