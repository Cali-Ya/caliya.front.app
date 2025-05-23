import { useState } from 'react';

const useDropDowns = ({ initialValue }) => {
  const [isDropDown, setIsDropDown] = useState(initialValue);

  const handleDropDown = (dropdown) => {
    setIsDropDown(dropdown);
  };

  return { isDropDown, handleDropDown };
};

export default useDropDowns;
