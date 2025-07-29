//css
import './profile_information.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent.jsx';
import { ButtonPrimary } from '../../../../components/button_components/ButttonsComponents.jsx';
import ProfileSettingsHeader from '../../components/profile_settings_header/ProfileSettingsHeader.jsx';
//utilts
import { getDecryptedItem } from '../../../../utils/encryptionUtilities.js';
//react
import { useForm } from 'react-hook-form';

const ProfileInformation = () => {
  //data value user
  const user_session = 'user_session';
  const user_data = getDecryptedItem(user_session);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user_data.data.name,
      sur_name: user_data.data.sur_name,
      phone: user_data.data.phone,
      email: user_data.data.email,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="profile_information">
      {/* header */}
      <ProfileSettingsHeader title="Información personal" />

      {/* form */}
      <form
        className="profile_information_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
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
        </div>

        <div>
          {/* sur_name */}
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
        </div>

        <div>
          {/* phone */}
          <InputComponent
            id="phone"
            name="phone"
            label="Número Teléfono"
            type="tel"
            autoComplete="off"
            register={register}
            errors={errors}
            rules={{
              required: {
                value: true,
                message: 'Escribe tu número de teléfono',
              },
              pattern: {
                value: /^\+57\d{10}$/,
                message:
                  'El número tener el codigo del pais y tener maximo 10 dígitos',
              },
            }}
          />
        </div>

        <div>
          <InputComponent
            id="email"
            name="email"
            label="Correo Electrónico"
            type="email"
            autoComplete="on"
            register={register}
            errors={errors}
            rules={{
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Correo electrónico inválido',
              },
            }}
          />
        </div>

        <ButtonPrimary type="submit" text="Cambiar información" />
      </form>
    </section>
  );
};

export default ProfileInformation;
