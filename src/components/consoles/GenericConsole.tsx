// Import the React library to use its features, like React.FC and React.memo.
import React from 'react';

// --- Type Definitions ---
// This section defines the 'shape' of the data our component will work with.

// Export the type definition for a single console item, making it reusable in other files.
export type ConsoleItem = {
  // A unique identifier for each item, crucial for the 'key' prop in lists. Can be a string or a number.
  id: string | number;
  // The text to be displayed for the item, for example, in a tooltip.
  title: string;
  // The icon component to be rendered. `React.ComponentType` is the correct and safe type for this.
  icon: React.ComponentType;
};

// Define the type for the props that the GenericConsole component accepts.
type GenericConsoleProps = {
  // An optional array of console items to be rendered. The '?' makes it optional (can be undefined).
  data?: ConsoleItem[];
  // A required callback function that is triggered on click, receiving the specific item that was clicked.
  handleClick: (item: ConsoleItem) => void;
  // An optional string to identify the currently active item by its title, used for styling.
  active?: string;
};

// --- Component Definition ---
// This is the main functional component.

// Define the functional component, typed with React.FC (Functional Component) and our custom props type.
// We destructure the props ({ data, handleClick, active }) for easier access within the component.
const GenericConsole: React.FC<GenericConsoleProps> = ({ data, handleClick, active }) => {
  // The return statement contains the JSX that will be rendered to the DOM.
  return (
    // The main container div for the entire console bar, styled with Tailwind CSS.
    <div className="flex border-0 border-purple-600 mx-0 w-full h-full">
      {/* Map over the 'data' array to render each item. */}
      {/* Use optional chaining ('?.') to prevent an error if 'data' is null or undefined. */}
      {data?.map((item) => (
        // The wrapper div for a single clickable console item.
        <div
          // Assign a stable and unique key to each item. This is critical for React's performance.
          key={item.id}
          // Set up the click event handler. It calls the 'handleClick' prop with the current item's data.
          onClick={() => handleClick(item)}
          // Use a template literal to apply CSS classes, including dynamic ones for the active state.
          className={`flex flex-col items-center justify-center 
               glowy-button-5 group relative border-0 p-0 rounded m-2
               hover:bg-600 h-16 w-20 text-primary cursor-pointer 
              ${active === item.title ? 'bg-600' : ''}`} // Conditionally apply 'bg-600' class if this item is active.
        >
          {/* Render the icon component that was passed in via the 'icon' property of the item. */}
          <item.icon />
          {/* A div for the tooltip text that appears on hover (using Tailwind's 'group-hover' utility). */}
          <div className="ml-2 hidden group-hover:block text-white text-sm rounded z-50">
            {/* Display the title of the item inside the tooltip. */}
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Performance Optimization & Export ---
// This section optimizes the component and prepares it for use in other parts of the application.

// Wrap the component with React.memo. This prevents it from re-rendering if its props have not changed.
const MemoizedGenericConsole = React.memo(GenericConsole);

// Set a display name. This is very helpful for debugging in React Developer Tools.
MemoizedGenericConsole.displayName = 'GenericConsole';

// Export the memoized version of the component as the default export from this file.
export default MemoizedGenericConsole;
