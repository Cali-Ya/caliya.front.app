//css
import './caliya_loader.css';
//components
import Spinner from '../../spinner/Spinner';

const CaliyaLoader = () => {
  return (
    <div className="loader_container">
      <Spinner className="caliya_loader_spinner" />
    </div>
  );
};

export default CaliyaLoader;
