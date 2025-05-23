import { useState } from 'react';

const useExpanded = ({ initialValue }) => {
  const [isExpanded, setIsExpanded] = useState(initialValue);

  const handleToggleViewProducts = () => {
    setIsExpanded(!isExpanded);
  };

  return {
    isExpanded,
    handleToggleViewProducts,
  };
};

export default useExpanded;
