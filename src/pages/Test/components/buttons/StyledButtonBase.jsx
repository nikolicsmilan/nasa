// src/components/buttons/StyledButton.jsx
import PropTypes from 'prop-types';

const StyledButtonBase = ({
  styleType = 'accent', // 'panel', 'accent', 'glowing', 'neutral' (a korábbi 'bordered')
  label,
  subLabel,
  onClick,
  className = '',
  children,
  ...props
}) => {

  // Alap osztályok (méret, padding, stb. + témázott keret és hover árnyék)
  const baseClasses = `
    w-40 h-32 md:w-48 md:h-32 rounded-xl shadow-xl backdrop-blur-md
    flex flex-col items-center justify-center p-3 md:p-4 cursor-pointer
    transition-all duration-300 ease-in-out relative overflow-hidden
    border border-button-theme hover:border-button-theme-hover hover:shadow-button-theme-hover
  `;

  // Háttér és szöveg glow osztályok kiválasztása a styleType alapján
  let backgroundClass = '';
  let textGlowClass = '';

  switch (styleType) {
    case 'panel': // Az 1. típusnak megfelelő stílus
      backgroundClass = 'bg-panel-gradient';
      textGlowClass = ''; // Nincs glow
      break;
    case 'glowing': // A 3. típusnak megfelelő stílus
      backgroundClass = 'bg-button-accent-gradient';
      textGlowClass = 'drop-shadow-text-theme'; // Van glow
      break;
    case 'neutral': // A 4. típusnak megfelelő stílus (átneveztük bordered-ről)
      backgroundClass = 'bg-button-neutral-gradient';
      textGlowClass = 'drop-shadow-text-theme'; // Van glow
      break;
    case 'accent': // A 2. típusnak megfelelő stílus (ez az alapértelmezett is)
    default:
      backgroundClass = 'bg-button-accent-gradient';
      textGlowClass = ''; // Nincs glow
      break;
  }

  return (
    <button
      className={`${baseClasses} ${backgroundClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        {children ? (
          children // Ha van children, azt használjuk
        ) : (
          <>
            {/* A text-primary osztály alkalmazza a téma fő színét */}
            {/* A textGlowClass hozzáadja a drop-shadow-t, ha kell */}
            <span className={`font-bold text-base md:text-lg text-primary ${textGlowClass}`}>
              {label || 'Button'}
            </span>
            {subLabel && (
              <span className="text-neutral-300 text-xs md:text-sm mt-1">{subLabel}</span>
            )}
          </>
        )}
      </div>
    </button>
  );
};

StyledButtonBase.propTypes = {
  styleType: PropTypes.oneOf(['panel', 'accent', 'glowing', 'neutral']), // Frissített típusok
  label: PropTypes.string,
  subLabel: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default StyledButtonBase;