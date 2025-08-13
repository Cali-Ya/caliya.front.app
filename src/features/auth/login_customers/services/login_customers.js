//caliApi
import api from '../../../../lib/api';
import { setEncryptedItem } from '../../../../utils/encryptionUtilities';

const login_customers = async (
  data,
  navigate,
  setToggleSpinner,
  setRedirectionState,
  data_redirection_page
) => {
  // Activa el spinner
  setToggleSpinner(true);
  try {
    const response = await api.post('/customers/sign_in', data);
    console.log(response);

    const responseOK = 200;
    if (response.ok === responseOK) {
      const user_session = 'user_session';
      const userSession = {
        session: true,
        data: response.data,
      };
      setEncryptedItem(user_session, userSession);
      setRedirectionState(data_redirection_page);
      navigate('/redirect/locations');
    }
  } catch (error) {
    console.log(error);
  } finally {
    setToggleSpinner(false);
  }
};

export default login_customers;
