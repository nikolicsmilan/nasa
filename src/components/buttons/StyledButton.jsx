// src/components/buttons/StyledButton.jsx
import PropTypes from 'prop-types';

const StyledButton = ({
  variant = 'accent', // 'panel', 'accent', 'glowing', 'neutral'
  label,
  onClick,
  className = '', // Extra osztályok hozzáadásának lehetősége
  children,
  type = 'button', // Alapértelmezett típus
  disabled = false,
  ...props // Egyéb standard gomb attribútumok
}) => {

  // Alap osztályok (méret, padding, lekerekítés, alap flex, témázott keret és hover árnyék)
  const baseClasses = `
    inline-flex items-center justify-center relative
    px-5 py-2.5 text-sm font-bold rounded-md shadow-lg
    border border-button-theme overflow-hidden
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-offset-neutral-900 focus:ring-primary
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Hover osztályok (csak ha nincs letiltva)
  const hoverClasses = disabled ? '' : `
    hover:border-button-theme-hover hover:shadow-button-theme-hover hover:scale-[1.03]
  `;

  // Háttér és szöveg glow osztályok kiválasztása a variant alapján
  let backgroundClass = '';
  let textGlowClass = '';

  switch (variant) {
    case 'panel':
      backgroundClass = 'bg-panel-gradient'; // Téma BG
      textGlowClass = ''; // Nincs Glow
      break;
    case 'glowing':
      backgroundClass = 'bg-button-accent-gradient'; // Accent BG
      textGlowClass = 'drop-shadow-text-theme';    // Van Glow
      break;
    case 'neutral':
      backgroundClass = 'bg-button-neutral-gradient'; // Neutral BG
      textGlowClass = 'drop-shadow-text-theme';     // Van Glow
      break;
    case 'accent':
    default:
      backgroundClass = 'bg-button-accent-gradient'; // Accent BG
      textGlowClass = '';                             // Nincs Glow
      break;
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${backgroundClass} ${hoverClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* A szöveg megkapja a primary színt és a glow-t, ha kell */}
      <span className={`relative text-primary ${textGlowClass}`}>
        {children || label || 'Button'} {/* Először children, aztán label */}
      </span>
    </button>
  );
};

StyledButton.propTypes = {
  variant: PropTypes.oneOf(['panel', 'accent', 'glowing', 'neutral']), // Frissített típusok
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default StyledButton;