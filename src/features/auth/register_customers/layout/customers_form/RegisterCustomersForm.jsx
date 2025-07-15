//css
import './register_customers_form.css';
//components
import InputComponent from '../../../../../components/input_component/InputComponent';
import PrimaryButtonComponent from '../../../../../components/button_components/button_primary/PrimaryButtonComponent';
//services
import register_customer from '../../services/register_customer';
//react
import { useForm } from 'react-hook-form';
import InputCalendar from '../../../../../components/calendars/input_calendar/InputCalendar';

const RegisterCustomersForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    data.phone = `+57${data.phone}`;
    register_customer(data);
  };

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
      <PrimaryButtonComponent text="Registrarse" type="submit" />
    </form>
  );
};

export default RegisterCustomersForm;
