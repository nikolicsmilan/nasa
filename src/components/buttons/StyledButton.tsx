// src/components/buttons/StyledButton.tsx

// We no longer need 'prop-types'. TypeScript handles this at compile time.
// import PropTypes from 'prop-types';
import React from 'react'; // Import React for types like React.ReactNode

// Define a type for the button's visual variants.
// Using a string literal union type provides excellent autocompletion and error checking.
type ButtonVariant = 'panel' | 'accent' | 'glowing' | 'neutral';

// Define the component's props using a 'type' alias.
// This is the TypeScript replacement for PropTypes.
type StyledButtonProps = {
  variant?: ButtonVariant; // Use our custom type. The '?' makes it optional.
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // A more specific function type for click events.
  className?: string;
  children?: React.ReactNode; // The standard type for any content a React component can render.
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // SUPERPOWER: Inherit all standard button attributes!
                                                   // This automatically gives us `type`, `disabled`, `aria-label`, etc.

/**
 * A versatile, styled button component with multiple visual variants.
 * It leverages Tailwind CSS for styling and TypeScript for robust type safety.
 */
const StyledButton: React.FC<StyledButtonProps> = ({
  variant = 'accent',
  label,
  onClick,
  className = '',
  children,
  type = 'button', // We get this from ButtonHTMLAttributes, but we can still set a default.
  disabled = false,
  ...props // All other standard button props (e.g., 'name', 'id') will be collected here.
}) => {

  // Base classes for styling (size, padding, border, focus, disabled state, etc.)
  const baseClasses = `
    inline-flex items-center justify-center relative
    px-5 py-2.5 text-sm font-bold rounded-md shadow-lg
    border border-button-theme overflow-hidden
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-offset-neutral-900 focus:ring-primary
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Hover effect classes, applied only when the button is not disabled.
  const hoverClasses = disabled ? '' : `
    hover:border-button-theme-hover hover:shadow-button-theme-hover hover:scale-[1.03]
  `;

  // Select background and text glow classes based on the 'variant' prop.
  let backgroundClass = '';
  let textGlowClass = '';

  switch (variant) {
    case 'panel':
      backgroundClass = 'bg-panel-gradient'; // Theme BG
      textGlowClass = ''; // No Glow
      break;
    case 'glowing':
      backgroundClass = 'bg-button-accent-gradient'; // Accent BG
      textGlowClass = 'drop-shadow-text-theme';    // Glow
      break;
    case 'neutral':
      backgroundClass = 'bg-button-neutral-gradient'; // Neutral BG
      textGlowClass = 'drop-shadow-text-theme';     // Glow
      break;
    case 'accent':
    default:
      backgroundClass = 'bg-button-accent-gradient'; // Accent BG
      textGlowClass = '';                             // No Glow
      break;
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${backgroundClass} ${hoverClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props} // Spread the rest of the props onto the button element.
    >
      {/* The content wrapper receives the primary text color and glow effect if applicable. */}
      <span className={`relative text-primary ${textGlowClass}`}>
        {/* Prioritize children, then label, then a default text. */}
        {children || label || 'Button'}
      </span>
    </button>
  );
};

// We can now completely remove the PropTypes block.
// TypeScript provides static, more powerful checks.
/*
StyledButton.propTypes = {
  ...
};
*/

export default StyledButton;