import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const handleToggle = () => setState((prev) => !prev);

  return [state, handleToggle, setState];
};

export default useToggle;
