//css
import '../styles/register_customers.css';
//layout
import RegisterCustomersForm from '../layout/customers_form/RegisterCustomersForm';

const RegisterCustomers = () => {
  return (
    <section className="container_register_customers">
      <header className="container_register_customers__header">
        <h1 className="container_register_customers__title">Registrate</h1>
        <p className="container_register_customers__signup_text">
          Si ya tienes una cuenta <a href="/auth/login">Inicia Sección</a>
        </p>
      </header>
      <RegisterCustomersForm />

      <p className="container_register_customers__terms">
        Al registrarse, acepta nuestros Términos, Condiciones y Política de
        privacidad.
      </p>
    </section>
  );
};

export default RegisterCustomers;
