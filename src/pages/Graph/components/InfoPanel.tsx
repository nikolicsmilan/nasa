// src/pages/components/Graph/components/Infopanel.tsx

import React from 'react'; // Import React to use its built-in types like React.ReactNode

// 1. Define the type for the component's props.
type InfoPanelProps = {
  /**
   * The content to be rendered inside the panel.
   * Can be any valid React element, string, or component.
   */
  children: React.ReactNode;
};

/**
 * A simple layout component that acts as a container panel.
 * It's designed to fill its parent and structure its children in a column.
 */
const InfoPanel: React.FC<InfoPanelProps> = ({ children }) => {
  return (
    // The component's JSX structure remains unchanged.
    // It's a full-width, full-height flex container.
    <div className="border-0 p-1 w-full h-full flex flex-col">
      {children}
    </div>
  );
};

export default InfoPanel;



