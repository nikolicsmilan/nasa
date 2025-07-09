// src/layouts/AppLayout.tsx
// Imports React hooks, lazy loading, and Suspense for handling loading states.
import React, { useEffect, lazy, Suspense } from "react";
// Imports the Outlet component from React Router to render nested routes.
import { Outlet } from "react-router-dom";
// Imports a specific icon component.
import { FaCog } from "react-icons/fa";
// Imports a component from Framer Motion for handling animations on mount/unmount.
import { AnimatePresence } from "framer-motion";
// Imports the custom context to access global state.
import { MyDataContext } from "../context/DataContext";
// Imports a static image asset.
import logo from "../assets/images/sat4.png";
// Imports a static data object for menu items.
import { settingshome } from "../locales/localdata";

// --- Type Definitions ---

// Defines the structure for the background configuration object. This replaces PropTypes.
interface BackgroundConfig {
  type: 'none' | 'video' | 'image' | 'gradient'; // The type of background, restricted to these values.
  src?: string;       // Optional source URL for 'video' or 'image' types.
  value?: string;     // Optional value, e.g., for a 'gradient' background.
}

// Defines the structure for the AppLayout component's props.
interface AppLayoutProps {
  showNavbar?: boolean;           // Optional boolean to control navbar visibility.
  backgroundConfig?: BackgroundConfig; // Optional object for background configuration.
}

// --- Lazy-Loaded Components ---
// These components will be code-split and loaded only when they are needed.
const SettingsBarAnimation = lazy(() => import("../components/Sidebar/SettingsBarAnimation"));
const MobileConsoleView = lazy(() => import("../components/consoles/views/MobileConsoleView"));
const DesktopConsoleView = lazy(() => import("../components/consoles/views/DesktopConsoleView"));
const NavBarSimple = lazy(() => import("../components/navbarsimple/NavBarSimple"));

// --- Constants ---
// A default background configuration object to be used as a fallback.
const defaultBackground: BackgroundConfig = { type: 'none' };
// A default video source URL.
const defaultVideoSrc = "https://sablonossablon.web.app/video/optimized_earth2.mp4";

// Defines the AppLayout functional component, typed with its props interface.
const AppLayout: React.FC<AppLayoutProps> = ({
  showNavbar = true,              // Sets a default value for showNavbar.
  backgroundConfig = defaultBackground // Sets a default value for backgroundConfig.
}) => {
  // Destructures state and functions from the global data context.
  const { setToggle, settingsOpen, setSettingsOpen, toggle, choosenStyle } = MyDataContext();

  // A function to close the settings overlay.
  const clozer = (): void => {
    setSettingsOpen(false);
  };
  // A function to stop event propagation, preventing the overlay from closing when its content is clicked.
  const stopClozer = (event: React.MouseEvent): void => {
    event.stopPropagation();
  };

  // A side effect hook to handle the visibility of the settings overlay with a delay.
  useEffect(() => {
    // If the settings overlay is closing...
    if (!settingsOpen) {
      // ...wait 100ms before setting the main toggle to false (for animations).
      const timeoutId = setTimeout(() => {
        setToggle(false);
      }, 100);
      // Cleanup function: clear the timeout if the component unmounts or dependencies change.
      return () => clearTimeout(timeoutId);
    }
  }, [settingsOpen, setToggle]); // Dependencies for the effect.

  // A helper function to render the correct background based on the config prop.
  const renderBackground = () => {
    // Uses a switch statement to handle different background types.
    switch (backgroundConfig.type) {
      // In case the background should be a video...
      case 'video':
        return (
          <video
            // A unique key ensures the video element is re-rendered if the source changes.
            key={backgroundConfig.src || defaultVideoSrc}
            // The source URL for the video.
            src={backgroundConfig.src || defaultVideoSrc}
            // CSS classes for styling the video background.
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
            autoPlay // The video will start playing automatically.
            loop     // The video will loop continuously.
            muted    // The video will be muted.
            playsInline // Important for playback on mobile devices.
          />
        );
      // In case the background should be an image...
      case 'image':
        return (
          <div
            // CSS classes for styling the image background.
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80"
            // Sets the background image via inline styles.
            style={{ backgroundImage: `url(${backgroundConfig.src || '/images/starfield.png'})` }}
          ></div>
        );
      // For 'none' type or any other unhandled case...
      case 'none':
      default:
        // ...render a default starry background.
        return (
             <div className="absolute top-0 left-0 w-full h-full bg-black z-0 opacity-90" style={{backgroundImage: 'url(/images/starfield.png)'}}></div>
         );
    }
  };

  // The main return statement for the component's JSX.
  return (
    // Wraps the component in AnimatePresence to enable exit animations.
    <AnimatePresence>
      {/* The main container div for the entire layout. */}
      <div
        // Applies dynamic theme styles and layout classes.
        className={`${choosenStyle} overflow-hidden mystyle border-0 bg-black text-primarys h-screen w-screen flex flex-col relative font-mono`}
      >{choosenStyle}

        {/* Renders the background by calling the helper function. */}
        {renderBackground()}

        {/* --- HEADER --- */}
        <header
          // CSS classes for the header section.
          className="w-full flex justify-between items-center border-0 absolute z-40 top-0 left-0 right-0 h-20"
        >
          {/* The logo image, which also acts as a button to open settings. */}
          <img
            src={logo}
            className="relative z-40 w-20 m-1 p-2 cursor-pointer border-0"
            onClick={() => { setToggle(true); setSettingsOpen((prev: boolean) => !prev); }}
            alt="Logo"
          />
          {/* A container for the main navigation bar, hidden on smaller screens. */}
          <div className="lg:flex flex-1 flex-row justify-center items-center hidden h-full border-0">
            {/* Conditionally renders the navbar based on the showNavbar prop. */}
            {showNavbar && (
              // Uses Suspense to show a fallback while the lazy-loaded navbar is loading.
              <Suspense fallback={<div>Loading Menu...</div>}>
                <NavBarSimple />
              </Suspense>
            )}
          </div>
          {/* The settings cog icon, which also opens the settings overlay. */}
          <FaCog
            className="relative z-40 text-4xl m-1 p-2 cursor-pointer border-0 text-primary"
            onClick={() => { setToggle(true); setSettingsOpen((prev: boolean) => !prev); }}
          />
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="flex flex-grow z-30 w-full h-full relative justify-center pt-20">
            {/* This container holds the main page content. */}
            <div className="w-full h-full border-0 relative">
              {/* The Outlet component renders the matched child route's element. */}
              <Outlet />
            </div>
        </main>

         {/* --- SETTINGS OVERLAY --- */}
         {/* Conditionally renders the settings overlay if 'toggle' is true. */}
         {toggle && (
            <div
              // This onClick handler closes the overlay.
              onClick={clozer}
              className="mx-0 absolute z-50 inset-0 h-full w-full border-orange-300 border-0 flex flex-col items-center p-2 overflow-y-auto bg-black bg-opacity-70"
            >
              {/* Uses Suspense for the lazy-loaded settings components. */}
              <Suspense fallback={<div>Loading Settings...</div>}>
                {/* Renders the mobile-specific settings view. */}
                <MobileConsoleView stopClozer={stopClozer} />
                {/* A container for the main settings bar. */}
                <div
                  className="flex flex-col items-center my-10 p-2 border-0 w-full max-w-md"
                  // This onClick stops the clozer function from firing when clicking inside.
                  onClick={stopClozer}
                >
                  {/* Renders the animated settings bar with its menu items. */}
                  <SettingsBarAnimation menupoint={settingshome} />
                </div>
                {/* Renders the desktop-specific settings view. */}
                <DesktopConsoleView stopClozer={stopClozer} />
              </Suspense>
            </div>
          )}
      </div>
    </AnimatePresence>
  );
};

// Exports the component as the default export.
export default AppLayout;