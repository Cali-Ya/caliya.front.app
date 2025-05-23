import { useEffect, useState } from 'react';

const useScroll = (offset = 10, ref = null) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const target = ref?.current || window;
    const handleScroll = () => {
      const scrollTop = ref?.current ? ref.current.scrollTop : window.scrollY;
      setScrolled(scrollTop > offset);
    };
    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, [offset, ref]);

  return scrolled;
};

export default useScroll;
