//css
import './login_customers.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent';
import { ButtonPrimary } from '../../../../components/button_components/ButttonsComponents';
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
    data.phone_number = `+57${data.phone_number}`;
    console.log(data);
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
        <InputComponent
          id="phone_number"
          name="phone_number"
          label="Número de télefono"
          type="text"
          autoComplete="off"
          register={register}
          errors={errors}
          rules={{
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^[1-9][0-9]{9}$/, // 10 dígitos, sin cero inicial
              message: 'Ingresa un número de télefono válido',
            },
          }}
        />
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
        <ButtonPrimary type="submit" text="Ir a la página principal" />
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
