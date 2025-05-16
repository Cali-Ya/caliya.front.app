import { useNavigate } from 'react-router-dom';

const useNavigatePage = () => {
  let navigate = useNavigate();

  return navigate;
};

export default useNavigatePage;
