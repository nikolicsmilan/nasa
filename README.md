# Project Name: NASA

## Directory Structure

├── public/ // Static resources served by the application <br>
│ ├── index.html // The main HTML file of the application <br>
├── src/ <br>
│ ├── assets/ // Static resources used by the application <br>
│ │ ├── images/ // Directory for images <br>
│ │ ├── video/ // Directory for videos <br>
│ │ └── sound/ // Directory for sound files <br>
│ ├── context/ v
│ │ ├── AudioContext.jsx // Context for audio-related functionalities <br>
│ │ └── DataContext.jsx // Data context for shared data <br>
│ │ └── ConsoleContext.jsx // Console context related to buttons of Super3DConsoles <br>
│ ├── components/ <br>
│ │ ├── consoles/ // Directory for console components <br>
│ │ │ ├── NavigationConsole.jsx // Current navigation available on the page <br>
│ │ │ ├── LanguageConsole.jsx // Possible language settings <br>
│ │ │ ├── SoundConsole.jsx // Possible sound settings <br>
│ │ │ ├── StyleConsole.jsx // Possible style settings <br>
│ │ │ └── DataConsole.jsx // Available basic user data <br>
│ │ │ ├── views/ // Directory for console-related views <br>
│ │ │ │ ├── Consoles.jsx // Default appearance glass-like consoles <br>
│ │ │ │ ├── BiggerConsoles.jsx // Consoles in a larger size <br>
│ │ │ │ ├── DesktopConsoleView.jsx // Responsible for the desktop view of consoles <br>
│ │ │ │ └── MobileConsoleView.jsx // Responsible for the mobile view of consoles <br>
│ │ │ │ └── SquareminConsole.jsx <br>
│ │ │ │ └── Super3DConsole.jsx <br>
│ │ │ │ └── CircuitLines.jsx <br>
│ │ ├── Sidebar/ // Directory for Sidebar components <br>
│ │ │ ├── SettingsBarAnimation.jsx // SettingsBar animation <br>
│ │ │ └── SettingsBar.jsx // The SettingsBar itself <br>
│ ├── hooks/ // Directory for custom hooks <br>
│ │ └── use-windowsize.js // Hook for getting dynamic information about the screen size <br>
│ ├── layouts/ // Components for application layouts <br>
│ │ ├── LayoutHome.jsx // Default layout <br>
│ │ └── LayoutDashBoard.jsx // Layout component for the dashboard <br>
│ ├── locales/ <br>
│ │ └── localdata.js // Static data for menus, testing, and more <br>
│ ├── utils/ <br>
│ │ └── motion.js // Static data for animations using framer-motion <br>
│ ├── pages/ // Components for individual pages <br>
│ │ ├── Home/ // Main page component and its sub-components <br>
│ │ │ ├── Home.jsx <br>
│ │ │ └── components/ // Sub-components of the main page component <br>
│ │ ├── Asteroide/ // Component for Asteroid page <br>
│ │ │ ├── Asteroide.jsx <br>
│ │ │ └── components/ <br>
│ │ ├── AsteroideDetail/ <br>
│ │ │ ├── AsteroideDetail.jsx <br>
│ │ │ └── components/ <br>
│ │ ├── Error/ <br>
│ │ │ ├── Error.jsx <br>
│ │ ├── Quiz/ <br>
│ │ │ ├── Quiz.jsx <br>
│ │ ├── SolarSystem/ <br>
│ │ │ ├── SolarSystem.jsx <br>
│ │ ├── SpaceKnowledge/ <br>
│ │ │ ├── SpaceKnowledge.jsx <br>
│ ├── firebase/ // Firebase-related files <br>
│ │ ├── auth.js // Authentication functions <br>
│ │ ├── firestore.js // Firestore related functions <br>
│ │ └── fileupload.js // File upload functions <br>
│ ├── utils/ // Helper functions and classes <br>
│ │ ├── motion.js // Animation helper functions <br>
│ │ ├── auth.js // Authentication helper functions <br>
│ │ └── validation.js // Validation helper functions <br>
│ ├── App.jsx // Main component of the application <br>
│ ├── App.css // CSS file for the main component <br>
│ ├── main.js // Main JavaScript file <br>
│ ├── index.css // CSS file for index.html <br>
│ └── firebase.js // Firebase configuration <br>
│ └── main.js // Main JavaScript file <br>
│ └── tailwind.css // Tailwind CSS file <br>
├── index.html // The main HTML file <br>
├── .gitignore // Git ignore settings file <br>
├── package.json // Project metadata and dependencies <br>
├── package-lock.json // Dependency lock file <br>
├── firebase.js // Firebase configuration <br>
├── firebase.json // Firebase configuration <br>
├── firebaserc // Firebase configuration <br>
├── postcss.config.js // PostCSS configuration <br>
├── vite.config.js // Vite configuration <br>
└── README.md // Project README file <br>

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nikolicsmilan/nasa.git