import { useEffect } from 'react';

const useFullHeight = () => {
  useEffect(() => {
    const setFullHeight = () => {
      // Timeout para asegurar que el layout esté listo
      setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100);
    };

    // Ejecuta al montar
    setFullHeight();

    // Ejecuta cuando la página termina de cargar (importante en móviles)
    window.addEventListener('load', setFullHeight);

    // Ejecuta en resize y orientationchange
    window.addEventListener('resize', setFullHeight);
    window.addEventListener('orientationchange', setFullHeight);

    return () => {
      window.removeEventListener('load', setFullHeight);
      window.removeEventListener('resize', setFullHeight);
      window.removeEventListener('orientationchange', setFullHeight);
    };
  }, []);
};

export default useFullHeight;
