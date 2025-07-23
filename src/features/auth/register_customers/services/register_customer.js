import api from '../../../../lib/api';

const register_customer = async (
  data,
  setToggleSpinner,
  setEncryptedItem,
  navigate
) => {
  // Activa el spinner
  setToggleSpinner(true);

  try {
    const response = await api.post('/customers', data);

    if (response.status === 201) {
      // Actualiza el user_session con los datos de la respuesta
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
    // Desactiva el spinner
    setToggleSpinner(false);
  }
};

export default register_customer;
