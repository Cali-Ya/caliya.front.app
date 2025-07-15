import api from '../../../../lib/api';

const register_customer = async (data, setToggleSpinner) => {
  //active spinner
  const activeSpinner = true;
  setToggleSpinner(activeSpinner);

  //request to register customer
  try {
    const response = await api.post('/customers', data);

    if (response.status === 201) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  } finally {
    //desactive spinner
    const desactiveSpinner = false;
    setToggleSpinner(desactiveSpinner);
  }
};

export default register_customer;
