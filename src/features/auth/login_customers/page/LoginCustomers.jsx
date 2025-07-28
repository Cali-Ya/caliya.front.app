//css
import './login_customers.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
//services
import login_customers from '../services/login_customers';
//react
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginCustomers = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email_or_phone = `+57${data.email_or_phone}`;
    login_customers(data, navigate);
  };

  //vars
  const isUsingPassoword = true;

  return (
    <section className="login_customers_container">
      <AuthHeader
        title="Bienvenido a CaliYa"
        description="Inicia sesión para poder realizar tus pedidos. "
        text_link="De vuelta al menú"
        return_link="/"
      />

      <form className="login_customers_form" onSubmit={handleSubmit(onSubmit)}>
        {/* email or phone */}
        <InputComponent
          id="email_or_phone"
          name="email_or_phone"
          label="Correo o Número de télefono"
          type="text"
          autoComplete="off"
          register={register}
          errors={errors}
          rules={{
            required: 'Este campo es obligatorio',
            validate: (value) => {
              const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              const phoneRegex = /^[1-9][0-9]{9}$/; // 10 digits, no leading zero
              if (emailRegex.test(value)) return true;
              if (phoneRegex.test(value)) return true;
              return 'Ingresa un correo válido o un número de télefono';
            },
          }}
        />
        {/* password */}
        <InputComponent
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          autoComplete="off"
          register={register}
          errors={errors}
          typePassword={isUsingPassoword}
          rules={{
            required: {
              value: true,
              message: 'Escribe tu contraseña',
            },
          }}
        />
        <PrimaryButtonComponent type="submit" text="Ir a la página principal" />
      </form>

      <footer className="login_customer_footer">
        <p className="login_customer_footer__description">
          ¡Quiero pedir! <a href="/auth/sign_up">Crear mi cuenta ahora</a>
        </p>
      </footer>
    </section>
  );
};

export default LoginCustomers;
