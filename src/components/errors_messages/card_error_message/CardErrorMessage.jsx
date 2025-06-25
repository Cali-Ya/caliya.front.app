//css
import './card_error_message.css';
//icons
import { IoMdInformationCircleOutline } from 'react-icons/io';

const CardErrorMessage = ({ error_message }) => {
  return (
    <div className="container_card_error_message">
      <IoMdInformationCircleOutline className="icon_error_message" />
      <p className="text_error_message">{error_message}</p>
    </div>
  );
};

export default CardErrorMessage;
