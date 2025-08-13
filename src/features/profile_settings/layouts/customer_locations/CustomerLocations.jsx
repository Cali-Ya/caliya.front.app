//css
import './customer_locations.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent';
import ProfileSettingsHeader from '../../components/profile_settings_header/ProfileSettingsHeader';
import {
  ButtonPrimary,
  ButtonSecondary,
} from '../../../../components/button_components/ButttonsComponents';
//icons
import { MdLocationOn, MdDelete } from 'react-icons/md';
//react
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import register_location_customer from '../../services/register_location_customer';
import Spinner from '../../../../components/spinner/Spinner';
import { GoogleMapsGeocoding } from '../../../../services/GoogleMapsGeocoding';

const CustomerLocations = () => {
  //detected location
  const [showAddressHint, setShowAddressHint] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [gpsAddress, setGpsAddress] = useState('');

  //force label
  const [forceMoveLabel, setForceMoveLabel] = useState(false);
  // spiner button
  const [toggleSpinner, setToggleSpinner] = useState(false);

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const coords = watch('coords');

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

  //Get location
  const handleGetLocation = async () => {
    // Active spinner
    setLoadingLocation(true);
    if (navigator.geolocation) {
      // Get location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setValue('coords', {
            lat: latitude,
            long: longitude,
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
    // register_location_customer(data, setToggleSpinner);
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
          id="alias"
          name="alias"
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
            onFocus={() => {
              setShowAddressHint(true);
              handleGetLocation();
            }}
          />
          {showAddressHint && (
            <div
              className="customer_locations_form__content_location"
              ref={hintRef}
            >
              <h4 className="customer_locations_form__content_location__title">
                Obten tu ubicación actual.
              </h4>
              {gpsAddress && (
                <div className="customer_locations_form__content_location__gps_address">
                  {loadingLocation ? (
                    <Spinner className="customer_locations_form__content_location__gps_address__spinner" />
                  ) : (
                    <div className="customer_locations_form__content_location__gps_address__info">
                      {gpsAddress}.
                      <ButtonPrimary
                        text="Usar ubicación"
                        onClick={() => {
                          setValue('address', gpsAddress, {
                            shouldValidate: true,
                            shouldTouch: true,
                          });
                          setShowAddressHint(false);
                          setForceMoveLabel(true);
                          setGpsAddress('');
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <InputComponent
          id="reference"
          name="reference"
          label="Referencia"
          autoComplete="off"
          register={register}
          errors={errors}
          rules={{
            required: {
              value: true,
              message: 'Escribe una referencia, ej. Casa 123 color azul',
            },
          }}
        />

        <ButtonPrimary
          type="submit"
          text="Añadir ubicación"
          toggleSpinner={toggleSpinner}
        />
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
