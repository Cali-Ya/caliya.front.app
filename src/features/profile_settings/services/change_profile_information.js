import api from '../../../lib/api';

export const change_profile_data = async (data, setToggleSpinner) => {
  setToggleSpinner(true);
  try {
    const response = await api.put('/customers', data);
    if (response.status === 200) {
      return { success: true, message: 'Datos cambiados' };
    } else {
      return { success: false, message: 'Error al cambiar los datos' };
    }
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    return { success: false, message: 'Error de servidor' };
  } finally {
    setToggleSpinner(false);
  }
};

export const change_password = async (data) => {
  try {
    const response = await api.put('/customers/change-password', data);
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    return { success: false, message: 'Error de servidor' };
  }
};
