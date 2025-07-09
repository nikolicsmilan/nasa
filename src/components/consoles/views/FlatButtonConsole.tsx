// src/components/consoles/views/FlatButtonConsole.tsx
// Imports React and the 'memo' higher-order component for performance optimization.
import React, { memo } from 'react';
// Imports the 'motion' component from Framer Motion for animations.
import { motion } from 'framer-motion';
// Imports 'IconType' to provide a type for icon components (e.g., from react-icons).
import { IconType } from 'react-icons';

// --- Type Definitions ---
// These types define the data structures and contracts for the component.

/**
 * EXPORTED TYPE: Describes the structure of a single data item used to generate a button.
 * By exporting this, parent components can create type-safe data arrays.
 */
export interface DataItem {
  title: string;       // The text displayed on the button.
  icon?: IconType;     // An optional icon component to display next to the text.
}

/**
 * EXPORTED TYPE: Describes the shape of the configuration object.
 * Exporting this allows the parent to manage a type-safe configuration state.
 */
export interface Config {
  dataType?: string;     // The currently selected data type (e.g., 'users', 'events').
  graphType?: string;    // The currently selected graph type (e.g., 'bar', 'line').
  sortOrder?: 'asc' | 'desc'; // The currently selected sort order.
}

/**
 * INTERNAL TYPE: Defines the props specifically for this component.
 * This is an implementation detail and does not need to be exported.
 */
interface FlatButtonConsoleProps {
  nameconsole: string;     // The name of this console group (e.g., 'datatype', 'graph').
  data: DataItem[];        // The array of data, adhering to the exported DataItem structure.
  handleClick: (groupName: string, item: DataItem) => void; // The callback for button clicks.
  config: Config;          // The current configuration, adhering to the exported Config structure.
}

// --- Helper Function ---
// Moved outside the component to prevent re-creation on every render, enhancing performance.

/**
 * A pure function to determine if a button should be in an active state based on the current config.
 * @param groupName - The name of the console group ('datatype', 'graph', etc.).
 * @param itemTitle - The title of the specific button being checked.
 * @param currentConfig - The global configuration object.
 * @returns {boolean} - True if the button should be active, otherwise false.
 */
const isButtonActive = (groupName: string, itemTitle: string, currentConfig: Config): boolean => {
  if (!currentConfig) return false;

  switch (groupName) {
    case 'datatype':
      return currentConfig.dataType === itemTitle;
    case 'graph':
      return currentConfig.graphType === itemTitle;
    case 'filter':
      if (itemTitle === 'inc') return currentConfig.sortOrder === 'asc';
      if (itemTitle === 'desc') return currentConfig.sortOrder === 'desc';
      return false;
    default:
      return false;
  }
};


// --- The Main Component ---

// Defines the functional component, typed with its internal props interface.
const FlatButtonConsole: React.FC<FlatButtonConsoleProps> = ({ nameconsole, data, handleClick, config }) => {
  return (
    // The main container div, taking up the full width of its parent.
    <div className="w-full">
      {/* A CSS grid container with two columns and a small gap between them. */}
      <div className="grid grid-cols-2 gap-2">
        {/* Maps over the 'data' array to create a button for each item. */}
        {data.map((item) => {
          // Determines if the current button should be rendered in an 'active' state.
          const isActive = isButtonActive(nameconsole, item.title, config);

          // Dynamically constructs the button's CSS class string based on its active state.
          const buttonClasses = `
            flex items-center justify-center p-2 rounded transition-colors duration-200 ease-in-out
            border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full h-10
            ${isActive
              ? 'bg-primary text-neutral-900 border-primary shadow-md hover:bg-primary/90 font-bold' // Active state classes
              : 'bg-neutral-700 border-neutral-600 text-neutral-300 hover:bg-neutral-600 hover:border-neutral-500' // Inactive state classes
            }
          `;

          // Returns a 'motion.button' for each item, providing animation capabilities.
          return (
            <motion.button
              // A unique and stable key is crucial for React's list rendering performance.
              // Using the title is acceptable if titles within a single console are unique.
              key={item.title}
              // Attaches the click handler, calling the 'handleClick' prop passed from the parent.
              onClick={() => handleClick(nameconsole, item)}
              // Applies the dynamically generated CSS classes to the button.
              className={buttonClasses}
              // Defines a hover animation with Framer Motion (no scaling effect if already active).
              whileHover={{ scale: isActive ? 1 : 1.03 }}
              // Defines a tap (click) animation with Framer Motion.
              whileTap={{ scale: 0.97 }}
            >
              {/* Conditionally renders the icon component only if it exists. */}
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

// --- Component Export ---

// Wraps the component in React.memo to prevent re-renders if its props have not changed.
const MemoizedFlatButtonConsole = memo(FlatButtonConsole);
// Sets a display name for easier debugging in React Developer Tools.
MemoizedFlatButtonConsole.displayName = 'FlatButtonConsole';
// Exports the memoized component as the default export of this file.
export default MemoizedFlatButtonConsole;