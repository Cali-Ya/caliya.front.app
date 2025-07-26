//css
import './change_password.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent';
import ProfileSettingsHeader from '../../components/profile_settings_header/ProfileSettingsHeader';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
//react
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const isUsingPassoword = true; // Assuming this is a constant for the password usage

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="change_password_container">
      <ProfileSettingsHeader title="Cambiar contraseña" />

      <form className="change_password_form" onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          id="password"
          name="password"
          label="Nueva contraseña"
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
        <InputComponent
          id="confirm_password"
          name="confirm_password"
          label="Confirmar nueva contraseña"
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

        <PrimaryButtonComponent type="submit" text="Cambiar contraseña" />
      </form>
    </section>
  );
};

export default ChangePassword;
