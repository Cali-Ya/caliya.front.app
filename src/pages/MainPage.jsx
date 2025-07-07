//components
import CaliyaLoader from '../components/loaders/caliya_loader/CaliyaLoader';
//stores
import useCaliyaLoader from '../store/caliya_loader.store';
//utils
import {
  setEncryptedItem,
  getDecryptedItem,
} from '../utils/encryptionUtilities';
//react;
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const MainPage = () => {
  const { state_caliya_loader } = useCaliyaLoader();

  useEffect(() => {
    //validate user session
    const user_session = 'user_session';
    const userSession = {
      session: false,
    };

    const user_data = getDecryptedItem(user_session);

    if (!user_data) {
      setEncryptedItem(user_session, userSession);
    }

    //loader
    if (state_caliya_loader) {
      document.body.style.overflow = 'hidden';
      return;
    }
    if (!state_caliya_loader) {
      document.body.style.overflow = '';
      return;
    }
  }, [state_caliya_loader]);

  return (
    <div className="main_page">
      {state_caliya_loader ? <CaliyaLoader /> : ''}
      <Outlet />
    </div>
  );
};

export default MainPage;
