import { useNavigate } from 'react-router-dom';

const useNavigatePage = () => {
  let navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return handleNavigate;
};

export default useNavigatePage;
