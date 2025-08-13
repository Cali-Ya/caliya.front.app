import api from '../lib/api';

const get_infomation_customer = async (setEncryptedItem) => {
  try {
    const response = await api.get('/customers');

    if (response.status === 200) {
      const user_session = 'user_session';
      const userSession = {
        session: true,
        data: response.data,
      };
      setEncryptedItem(user_session, userSession);
    }
  } catch (error) {
    console.log(error);
  }
};

export default get_infomation_customer;
