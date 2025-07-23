//css
import '../styles/register_customers.css';
//layout
import RegisterCustomersForm from '../layout/customers_form/RegisterCustomersForm';
//components
import SecondaryButtomComponent from '../../../../components/button_components/button_secondary/SecondaryButtonComponent';
//react
import { useNavigate } from 'react-router-dom';

const RegisterCustomers = () => {
  const navigate = useNavigate();

  return (
    <section className="container_register_customers">
      <header className="container_register_customers__header">
        <h1 className="container_register_customers__title">Registrate</h1>
        <p className="container_register_customers_header__signup_text">
          Volver a la <a href="/">Página Principal</a>
        </p>
      </header>
      <RegisterCustomersForm />

      <span className="register_customers__text_login">¿Ya tienes cuenta?</span>

      <div className="container_register_customers__signup">
        <SecondaryButtomComponent
          text="Inicia Sección"
          onClick={() => navigate('/auth/login')}
        />
      </div>

      <p className="container_register_customers__terms">
        Al registrarse, acepta nuestros Términos, Condiciones y Política de
        privacidad.
      </p>
    </section>
  );
};

export default RegisterCustomers;
