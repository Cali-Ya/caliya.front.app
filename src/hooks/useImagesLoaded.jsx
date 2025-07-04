import { useEffect } from 'react';

const useImagesLoaded = (selector, deps = [], onLoaded) => {
  useEffect(() => {
    const images = Array.from(document.querySelectorAll(selector));
    if (images.length === 0) {
      onLoaded && onLoaded();
      return;
    }
    let loaded = 0;
    const checkLoaded = () => {
      loaded++;
      if (loaded === images.length) {
        onLoaded && onLoaded();
      }
    };
    images.forEach((img) => {
      if (img.complete) {
        checkLoaded();
      } else {
        img.addEventListener('load', checkLoaded);
        img.addEventListener('error', checkLoaded);
      }
    });
    // Limpieza de listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', checkLoaded);
        img.removeEventListener('error', checkLoaded);
      });
    };
    // eslint-disable-next-line
  }, deps);
};

export default useImagesLoaded;
