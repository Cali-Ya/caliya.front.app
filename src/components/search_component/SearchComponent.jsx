//css
import './search_component.css';
//icons
import { RxMagnifyingGlass } from 'react-icons/rx';
//react
import { useState } from 'react';

const SearchComponent = ({
  placeholder = 'Buscar...',
  onSearch,
  className = '',
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className={`search_component ${className}`}>
      <RxMagnifyingGlass className="icon_search_component" />
      <input
        type="search"
        name="search_component"
        id="search_component_input"
        onChange={handleChange}
        placeholder={placeholder}
        className="search_component_input"
        value={query}
      />
    </div>
  );
};

export default SearchComponent;
