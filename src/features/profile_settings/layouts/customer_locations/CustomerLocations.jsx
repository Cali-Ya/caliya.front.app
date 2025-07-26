//css
import './customer_locations.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent';
import ProfileSettingsHeader from '../../components/profile_settings_header/ProfileSettingsHeader';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
//icons
import { MdLocationOn, MdDelete } from 'react-icons/md';
//react
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Spinner from '../../../../components/spinner/Spinner';

const CustomerLocations = () => {
  //detected location
  const [showAddressHint, setShowAddressHint] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [gpsAddress, setGpsAddress] = useState('');

  //force label
  const [forceMoveLabel, setForceMoveLabel] = useState(false);

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const hintRef = useRef(null);
  useEffect(() => {
    if (!showAddressHint) return;

    function handleClickOutside(event) {
      if (hintRef.current && !hintRef.current.contains(event.target)) {
        setShowAddressHint(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddressHint]);

  //get location
  const handleGetLocation = async () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setValue('coords', {
            latitude: latitude,
            longitude: longitude,
          });
          // Usar Nominatim para obtener la dirección
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          setGpsAddress(data.display_name || 'No se pudo obtener la dirección');
          setLoadingLocation(false);
        },
        () => {
          setGpsAddress('No se pudo obtener la ubicación');
          setLoadingLocation(false);
        }
      );
    } else {
      setGpsAddress('La geolocalización no está soportada');
      setLoadingLocation(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="customer_locations_container">
      <ProfileSettingsHeader title="Mis ubicaciones" />

      {/* form */}
      <form
        className="customer_locations_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputComponent
          id="location_name"
          name="location_name"
          label="Nombre de la ubicación"
          autoComplete="off"
          register={register}
          errors={errors}
          rules={{
            required: {
              value: true,
              message: 'Escribe el nombre de la ubicación',
            },
          }}
        />

        <div
          className="customer_locations_form__content_input_address"
          style={{ position: 'relative' }}
        >
          <InputComponent
            id="address"
            name="address"
            label="Ubicación"
            autoComplete="off"
            register={register}
            errors={errors}
            forceMoveLabel={forceMoveLabel}
            rules={{
              required: {
                value: true,
                message: 'Escribe tu ubicación',
              },
            }}
            onFocus={() => setShowAddressHint(true)}
          />
          {showAddressHint && (
            <div
              className="customer_locations_form__content_location"
              ref={hintRef}
            >
              <h4 className="customer_locations_form__content_location__title">
                Obten tu ubicación actual o escribe tu dirección.
                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="customer_locations_form__content_location__button"
                  disabled={loadingLocation}
                >
                  {loadingLocation ? (
                    <Spinner className="customer_locations_form__content_location__spinner_button" />
                  ) : (
                    'Obtener'
                  )}
                </button>
              </h4>
              {gpsAddress && (
                <div className="customer_locations_form__content_location__gps_address">
                  {gpsAddress}.
                  <div>
                    <button
                      onClick={() => {
                        setValue('address', gpsAddress, {
                          shouldValidate: true,
                          shouldTouch: true,
                        });
                        setShowAddressHint(false);
                        setForceMoveLabel(true);
                        setGpsAddress('');
                      }}
                    >
                      Usar Ubicación
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <PrimaryButtonComponent type="submit" text="Añadir ubicación" />
      </form>

      <h3 className="customer_locations_title">Ubicaciones guardadas</h3>

      {/* address */}
      <div className="customer_locations__locations">
        {/* icon */}
        <MdLocationOn className="customer_locations__locations_icon" />

        {/* addres information */}
        <address className="customer_locations__address">
          <p className="customer_locations__address_name">Mi casa</p>
          <span className="customer_locations__address_description">
            Santa Martha, Edifi. 19-01, 3er etapa, Via ocumare charallave
          </span>
        </address>

        {/* actions */}
        <div className="customer_locations__action_content">
          <MdDelete className="customer_locations__action_content__icon" />
          <span className="customer_locations__action_content__text">
            Eliminar
          </span>
        </div>
      </div>
    </section>
  );
};

export default CustomerLocations;
