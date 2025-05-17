import './checkbox.css';

const Checkbox = ({ checked, onChange }) => {
  return (
    <span
      className={`custom-check${checked ? ' checked' : ''}`}
      onClick={onChange}
      tabIndex={0}
      role="checkbox"
      aria-checked={checked}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') onChange();
      }}
    >
      {checked && (
        <svg width="16" height="16" viewBox="0 0 16 16">
          <polyline
            points="3,8 7,12 13,4"
            style={{ fill: 'none', stroke: '#fff', strokeWidth: 2 }}
          />
        </svg>
      )}
    </span>
  );
};

export default Checkbox;
