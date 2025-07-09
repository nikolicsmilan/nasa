// Import React for creating the component.
import React from 'react';

// Import the shared data type 'ConsoleItem' from its source.
// This creates the explicit, type-safe contract with GenericConsole.
import GenericConsole, { ConsoleItem } from './GenericConsole';

// Import the data source. Ideally, this file would also be a .ts file exporting typed data.
import { languages } from '../../locales/localdata';

// Import the custom hook for saving user data.
import { useSave } from '../../hooks/use-saveuser';

// --- The Main Component ---

const LanguageConsole: React.FC = () => {
  // Use the custom hook to get the save function.
  const { saveUser } = useSave();

  /**
   * Handles the click event on a language button.
   * The 'item' parameter is now explicitly typed as ConsoleItem, ensuring type safety.
   * If you try to access a non-existent property like 'item.name', TypeScript will give an error.
   */
  const handleClick = (item: ConsoleItem) => {
    // We know 'item.title' exists because of the ConsoleItem type.
    saveUser("language", item.title);
  };

  return (
    // Render the GenericConsole component with type-checked props.
    <GenericConsole
      // The 'languages' array is passed as the 'data' prop.
      // TypeScript will now check if the structure of 'languages'
      // is compatible with the expected 'ConsoleItem[]' type.
      data={languages}
      // The type-safe click handler function is passed.
      handleClick={handleClick}
      // The 'placeholder' prop has been removed, as it would now cause a TypeScript error
      // because it's not defined in GenericConsoleProps.
    />
  );
};

export default LanguageConsole;