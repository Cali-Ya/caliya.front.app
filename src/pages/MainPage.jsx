//components
import CaliyaLoader from '../components/loaders/caliya_loader/CaliyaLoader';
//stores
import useCaliyaLoader from '../store/caliya_loader.store';
//react;
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const MainPage = () => {
  const { state_caliya_loader } = useCaliyaLoader();

  useEffect(() => {
    if (state_caliya_loader) {
      document.body.style.overflow = 'hidden';
      return;
    }
    if (!state_caliya_loader) {
      document.body.style.overflow = '';
      return;
    }
  });

  return (
    <div className="main_page">
      {state_caliya_loader ? <CaliyaLoader /> : ''}
      <Outlet />
    </div>
  );
};

export default MainPage;
