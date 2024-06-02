├── public/                  // Static resources served by the application  
├── build/                   // Build output directory  
│    ├── index.html           // The main HTML file of the application   
├── src/    
│   ├── assets/              // Static resources used by the application    
│   │   ├── images/          // Directory for images    
│   │   ├── video            // Directory for videos    
│   │   └── sound            // Directory for sound files   
│   ├── context/      
│   │   ├── AudioContext.jsx        // Context for audio-related functionalities    
│   │   └── DataContext.jsx     // Data context for shared data   
│   │   └── ConsoleContext.jsx     // Console context relation to buttons of Super3DConsoles  
│   ├── components/    
│   │   ├── consoles/               // Directory for console components     
│   │   │   ├── NavigationConsole.jsx       // urrent navigation available on the page     
│   │   │   ├── LanguageConsole.jsx       // Possible language settings   
│   │   │   ├── SoundConsole.jsx          // Possible sound settings   
│   │   │   ├── StyleConsole.jsx          // Possible style settings     
│   │   │   └── DataConsole.jsx           // Available basic user data         
│   │   │   ├── views/                  // Directory for console-related views      
│   │   │   │   ├── Consoles.jsx             // Default appearance glass-like consoles      
│   │   │   │   ├── BiggerConsoles.jsx         // Consoles in a larger size     
│   │   │   │   ├── DesktopConsoleView.jsx         // Responsible for the desktop view of consoles      
│   │   │   │   └── MobileConsoleView.jsx         // Responsible for the mobile view of consoles   
│   │   │   │   └── SquareminConsole.jsx // Small square for data appearance like torino scala results
│   │   │   │   └── Super3DConsole.jsx // On Desktop view main consoles to choose option there are 2x3. 
│   │   │   │   └── CircuitLines.jsx //  Show lines as wire in Super3DConsole.jsx
│   │   ├── Sidebar/                  // Directory for Sidebar components       
│   │   │   ├── SettingsBarAnimation.jsx  // SettingsBar animation      
│   │   │   └── SettingsBar.jsx          // The SettingsBar itself      
│   ├── hooks/      // Directory for custom hooks       
│   │   └── use-windowsize.js    // Hook for getting dynamic information about the screen size      
│   ├── layouts/             // Components for application layouts      
│   │   ├── LayoutHome.jsx    // Default layout      
│   │   └── LayoutDashBoard.jsx  // Layout component for the dashboard      
│   ├── locales/           
│   │   └── localdata.js    // Static data for menus, testing, and more     
│   ├── utils/         
│   │   └── motion.js    // Static data for animations using framermotion       
│   ├── pages/               // Components for individual pages     
│   │   ├── Home/            // Main page component and its sub-components      
│   │   │   ├── Home.jsx        
│   │   │   └── components/   // Sub-components of the main page component      
│   │   ├── Asteroide/          // Component for Asteroid page      
│   │   │   ├── Asteroide.jsx       
│   │   │   └── components //         
│   │   ├── AsteroideDetail /             
│   │   │   ├── AsteroideDetail.jsx     
│   │   │   └── components //         
│   │   ├── Error/             
│   │   │   ├── Error.jsx       
│   │   ├── Quiz/              
│   │   │   ├── Quiz.jsx        
│   │   ├── SolarSystem/               
│   │   │   ├── SolarSystem.jsx     
│   │   ├── SpaceKnowledge/            
│   │   │   ├── SpaceKnowledge.jsx      
│   ├── firebase/           // Firebase-related files       
│   │   ├── auth.js          // Authentication functions        
│   │   ├── firestore.js     // Firestore related functions     
│   │   └── fileupload.js    // File upload functions       
│   ├── utils/               // Helper functions and classes        
│   │   ├── motion.js          // Animation helper functions        
│   │   ├── auth.js            // Authentication helper functions       
│   │   └── validation.js    // Validation helper functions     
│   ├── App.jsx              // Main component of the application       
│   ├── App.css              // CSS file for the main component     
│   ├── main.js              // Main JavaScript file        
│   ├── index.css            // CSS file for index.html     
│   └── firebase.js          // Firebase configuration      
│   └── main.js              // Main JavaScript file        
│   └── tailwind.css         // Tailwind CSS file       
├── index.html               // The main HTML file      
├── .gitignore               // Git ignore settings file        
├── package.json             // Project metadata and dependencies       
├── package-lock.json        // Dependency lock file        
├── firebase.js              // Firebase configuration      
├── firebase.json            // Firebase configuration      
├── firebaserc               // Firebase configuration      
├── postcss.config.js        // PostCSS configuration       
├── vite.config.js           // Vite configuration      
└── README.md                // Project README file     

  

