// src/components/consoles/views/FlatButtonConsole.tsx
// Imports React and the 'memo' higher-order component for optimization.
import React, { memo } from 'react';
// Imports the 'motion' component from Framer Motion for animations.
import { motion } from 'framer-motion';
// Imports 'IconType' to provide a type for icon components (e.g., from react-icons).
import { IconType } from 'react-icons';

// --- Type Definitions ---

// Defines the structure for a single item in the 'data' array.
interface DataItem {
  title: string;       // The text displayed on the button.
  icon?: IconType;     // The optional icon component to display.
  // Add any other properties the item might have.
}

// Defines the structure for the configuration object.
interface Config {
  dataType?: string;     // The currently selected data type.
  graphType?: string;    // The currently selected graph type.
  sortOrder?: 'asc' | 'desc'; // The currently selected sort order.
}

// Defines the structure for the component's own props.
interface FlatButtonConsoleProps {
  nameconsole: string;     // The name of this console group (e.g., 'datatype', 'graph').
  data: DataItem[];        // The array of data used to generate the buttons.
  handleClick: (groupName: string, item: DataItem) => void; // The callback function for button clicks.
  config: Config;          // The current configuration object to determine active state.
}

// --- Helper Function (moved outside the component for performance) ---

// A pure function to check if a button should be active.
// It doesn't need to be recreated on every render.
const isButtonActive = (groupName: string, itemTitle: string, currentConfig: Config): boolean => {
  // If there's no config, no button is active.
  if (!currentConfig) return false;
  // Checks the active state based on the console's group name.
  switch (groupName) {
    // If it's the 'datatype' group...
    case 'datatype':
      // ...the button is active if its title matches the config's dataType.
      return currentConfig.dataType === itemTitle;
    // If it's the 'graph' group...
    case 'graph':
      // ...the button is active if its title matches the config's graphType.
      return currentConfig.graphType === itemTitle;
    // If it's the 'filter' group...
    case 'filter':
      // ...check for specific sort order titles.
      if (itemTitle === 'inc') return currentConfig.sortOrder === 'asc';
      if (itemTitle === 'desc') return currentConfig.sortOrder === 'desc';
      // If the title is not recognized, it's not active.
      return false;
    // For any other group, return false by default.
    default:
      return false;
  }
};


// --- The Main Component ---

// Defines the component, typed with its props interface.
const FlatButtonConsole: React.FC<FlatButtonConsoleProps> = ({ nameconsole, data, handleClick, config }) => {
  // The component returns a JSX structure.
  return (
    // A container div that takes up the full width of its parent.
    <div className="w-full">
      {/* A CSS grid container with two columns and a small gap. */}
      <div className="grid grid-cols-2 gap-2">
        {/* Maps over the 'data' array to create a button for each item. */}
        {data.map((item, index) => {
          // Determines if the current button should be in an 'active' state.
          const isActive = isButtonActive(nameconsole, item.title, config);

          // Constructs the full CSS class string based on the 'isActive' state.
          const buttonClasses = `
            flex items-center justify-center p-2 rounded transition-colors duration-200 ease-in-out
            border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full h-10
            ${isActive
              ? 'bg-primary text-neutral-900 border-primary shadow-md hover:bg-primary/90 font-bold' // Active state classes.
              : 'bg-neutral-700 border-neutral-600 text-neutral-300 hover:bg-neutral-600 hover:border-neutral-500' // Inactive state classes.
            }
          `;

          // Returns a 'motion.button' for each item in the 'data' array.
          return (
            <motion.button
              // Sets a unique key for each button, crucial for React's rendering.
              key={item.title + '-' + index}
              // Attaches the click handler, calling the 'handleClick' prop from the parent.
              onClick={() => handleClick(nameconsole, item)}
              // Applies the dynamically generated CSS classes to the button.
              className={buttonClasses}
              // Defines a hover animation using Framer Motion (no scaling if active).
              whileHover={{ scale: isActive ? 1 : 1.03 }}
              // Defines a tap (click) animation using Framer Motion.
              whileTap={{ scale: 0.97 }}
            >
              {/* Conditionally renders the icon component if it exists. */}
              {item.icon && <item.icon className="mr-1.5 text-base" />}
              {/* Renders the button's title text. */}
              {item.title}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

// Exports the component wrapped in React.memo.
// This prevents the component from re-rendering if its props have not changed.
export default memo(FlatButtonConsole);