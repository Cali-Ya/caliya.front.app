//css
import '../styles/register_customers.css';
//layout
import RegisterCustomersForm from '../layout/customers_form/RegisterCustomersForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

const RegisterCustomers = () => {
  return (
    <section className="container_register_customers">
      <AuthHeader
        title="Registrate"
        description="Registrate para poder realizar pedidos."
        text_link="De vuelta al menú"
        return_link="/"
      />

      <RegisterCustomersForm />

      <footer className="register_customers__footer">
        <span className="register_customers__footer__link">
          ¿Ya tienes cuenta? <a href="/auth/login">Inicia sección</a>
        </span>

        <p className="register_customers__footer__terms">
          Al registrarse, acepta nuestros Términos, Condiciones y Política de
          privacidad.
        </p>
      </footer>
    </section>
  );
};

export default RegisterCustomers;
