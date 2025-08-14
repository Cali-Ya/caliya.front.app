//css
import './register_customers_form.css';
//components
import InputComponent from '../../../../../components/input_component/InputComponent';
import { ButtonPrimary } from '../../../../../components/button_components/ButttonsComponents';
import InputCalendar from '../../../../../components/calendars/input_calendar/InputCalendar';
//assets
import { ilustrations } from '../../../../../assets/assets_exports';
//utils
import { setEncryptedItem } from '../../../../../utils/encryptionUtilities';
//services
import register_customer from '../../services/register_customer';
//stores
import useRedirections from '../../../../../store/redirections.store';
//react
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const RegisterCustomersForm = () => {
  //navigate
  const navigate = useNavigate();
  //toggle button spinner
  const [toggleSpinner, setToggleSpinner] = useState(false);

  //data redirection page
  const img_redirect_page = ilustrations.LocationIlustration;
  const description = (
    <>
      {`Agrega una ubicación para que puedas recibir tus pedidos en tu casa, oficina o donde tú quieras.`}
      <a href="/profile_settings/my_locations"> Agregar Ubicaciónes</a>
    </>
  );

  const data_redirection_page = {
    title: 'Agrega una ubicación',
    img: img_redirect_page,
    description: description,
  };

  const { setRedirectionState } = useRedirections();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    data.phone = `+57${data.phone}`;
    register_customer(
      data,
      setToggleSpinner,
      setEncryptedItem,
      navigate,
      setRedirectionState,
      data_redirection_page
    );
  };

  //const
  const isUsingPassoword = true;

  return (
    <form className="register_customers_form" onSubmit={handleSubmit(onSubmit)}>
      {/* name */}
      <InputComponent
        id="name"
        name="name"
        label="Nombre"
        type="text"
        autoComplete="off"
        register={register}
        errors={errors}
        rules={{
          required: {
            value: true,
            message: 'Escribe tu nombre',
          },

          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,30}$/,
            message: 'Escribe solo letras',
          },
          minLength: {
            value: 3,
            message: 'Mínimo 3 letras',
          },
          maxLength: {
            value: 30,
            message: 'Máximo 30 letras',
          },
        }}
      />

      {/* last name */}
      <InputComponent
        id="sur_name"
        name="sur_name"
        label="Apellido"
        type="text"
        autoComplete="off"
        register={register}
        errors={errors}
        rules={{
          required: {
            value: true,
            message: 'Escribe tu apellido',
          },

          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,30}$/,
            message: 'Escribe solo letras',
          },
          minLength: {
            value: 3,
            message: 'Mínimo 3 letras',
          },
          maxLength: {
            value: 30,
            message: 'Máximo 30 letras',
          },
        }}
      />

      {/* phone */}
      <InputComponent
        id="phone"
        name="phone"
        label="Telefono"
        type="tel"
        autoComplete="off"
        register={register}
        errors={errors}
        rules={{
          required: {
            value: true,
            message: 'Escribe tu número de telefono',
          },
          pattern: {
            value: /^[0-9]{1,10}$/,
            message: 'Escribe solo números',
          },
          minLength: {
            value: 1,
            message: 'Mínimo 1 dígito',
          },
          maxLength: {
            value: 10,
            message: 'Máximo 10 dígitos',
          },
        }}
      />

      {/* email (optional) */}
      <InputComponent
        id="email"
        name="email"
        label="Correo (opcional)"
        type="email"
        autoComplete="off"
        register={register}
        errors={errors}
        rules={{
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Correo electrónico inválido',
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
            message: 'Escribe una contraseña',
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
            message: 'Mínimo 8 caracteres, una mayúscula y un número',
          },
          minLength: {
            value: 8,
            message: 'Mínimo 8 caracteres',
          },
        }}
      />

      {/* confirm password */}
      <InputComponent
        id="confirm_password"
        name="confirm_password"
        label="Confirmar Contraseña"
        type="password"
        autoComplete="off"
        register={register}
        errors={errors}
        typePassword={isUsingPassoword}
        rules={{
          required: {
            value: true,
            message: 'Confirma la contraseña',
          },

          validate: (value) => {
            const password = watch('password');

            if (password !== value) {
              return 'Las contraseñas no son las mismas';
            }
            return true;
          },
        }}
      />

      {/* birthday date */}
      <InputCalendar
        title="Fecha de nacimiento"
        name="birthday_date"
        register={register('birthday_date', {
          required: 'La fecha de nacimiento es obligatoria',
          validate: (dateStr) => {
            const today = new Date();
            const birthDate = new Date(dateStr);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();

            if (
              age > 18 ||
              (age === 18 &&
                (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
            ) {
              return true;
            }
            return 'Debes ser mayor de edad';
          },
        })}
        setValue={setValue}
        errors={errors}
      />

      {/* submit */}
      <ButtonPrimary
        text="Registrarse"
        type="submit"
        toggleSpinner={toggleSpinner}
      />
    </form>
  );
};

export default RegisterCustomersForm;
