//css
import './auth_header.css';

const AuthHeader = ({
  title = 'Title',
  description = 'Description',
  return_link = '/',
  text_link = 'Text Link',
}) => {
  return (
    <header className="container_auth_header">
      <h1 className="container_auth_header__title">{title}</h1>
      <p className="container_auth_header_header__signup_text">
        {description} <a href={return_link}>{text_link}</a>
      </p>
    </header>
  );
};

export default AuthHeader;
