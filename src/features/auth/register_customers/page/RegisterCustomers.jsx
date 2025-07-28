//css
import '../styles/register_customers.css';
//layout
import RegisterCustomersForm from '../layout/customers_form/RegisterCustomersForm';
//components
import SecondaryButtomComponent from '../../../../components/button_components/button_secondary/SecondaryButtonComponent';
//react
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

const RegisterCustomers = () => {
  const navigate = useNavigate();

  return (
    <section className="container_register_customers">
      <AuthHeader
        title="Registrate"
        description="Registrate para poder realizar pedidos."
        text_link="De vuelta al menú"
        return_link="/"
      />

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
