import { useCallback } from 'react';

const useFloatFormat = () => {
  /**
   * Formatea un número flotante a la cantidad de decimales deseada.
   * @param {number|string} value - El número a formatear.
   * @param {number} decimals - Cantidad de decimales (por defecto 1).
   * @returns {string}
   */
  const formatFloat = useCallback((value, decimals = 1) => {
    const num = Number(value);
    if (isNaN(num)) return '';
    return num.toFixed(decimals);
  }, []);

  return { formatFloat };
};

export default useFloatFormat;
