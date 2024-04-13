nasa/
├── public/
├── build/
│   ├── index.html          // Az alkalmazás fő HTML fájlja
├── src/
│   ├── assets/             // Az alkalmazás által használt statikus erőforrások
│   │   └── images/         // Képek mappája
│   │   └── video         // 
│   │   └── sound         // 
│   ├── context/   
│   ├── components/   
│   │   ├── consoles/                  // Konzol komponensek mappája
│   │   │   └── NavigationConsole.jsx    //Az oldalon elérhető aktuális navigáció
│   │   │   └── LanguageConsole.jsx      //Leheteséges nyelvi beállítások   
│   │   │   └── SoundConsole.jsx         //Leheteséges nyelvi beállítások   
│   │   │   └── StyleConsole.jsx         //Leheteséges stílus beállítások     
│   │   │   └── DataConsole.jsx          //Elérhető alapadatok a felhasználóról         
│   │   │   ├── views/                 // Konzolhoz kapcsolódó nézetek mappája
│   │   │   │   └── consoles.jsx            // alapmegjelenés üvegszerű konzolok
│   │   │   │   └── BiggerConoles.jsx            //konzol nagyobb méretben
│   │   │   │   └── DesktopConsoleView.jsx            // consolok desktop nézetéért felel
│   │   │   │   └── MobilConsoleView.jsx            // consolok mobile nézetéért felel
│   │   ├── Sidebar/                   // Sidebar komponens mappája
│   │   │   ├── SettingsBarAnimation.jsx // SettingsBar animációja
│   │   │   └── SettingsBar.jsx         // Maga a SettingsBar
|   |── hooks/      // 
│   │   └── use-windowsize.js// Dinamikus információk a képernyő méretéről
│   ├── layouts/            // Az alkalmazás elrendezési komponensei
│   │   └── LayoutHome.jsx// Az alapértelmezett elrendezés 
|   |   └── LayoutDashBoard.jsx// A sentry (dashboard) elrendezés komponense
│   ├── locales/   
│   │   └── localdata.js// statikus adatok menühöz, tesztelésre és egyéb
│   ├── pages/              // Az egyes oldalak komponensei
│   │   ├── Home/           // A főoldal komponense és annak alkomponensei
│   │   │   ├── Home.jsx
│   │   │   └── components/ // A főoldal komponens alkomponensei
│   │   ├── Asteroide/          // 
│   │   │   ├── Asteroide.jsx
│   │   │   └── components //
│   │   ├── AsteroideDetail /      
│   │   │   ├── AsteroideDetail.jsx
│   │   │   └── components //  
│   ├── firebase/           // 
│   │   ├── auth.js          // 
│   │   └── firestore.js     // 
│   │   └── fileupload.js     // 
│   ├── utils/              // Segédfüggvények és segédosztályok
│   │   ├── motion.js         // Animációs segédfüggvények
│   │   ├── auth.js         // Autentikációs segédfüggvények
│   │   ├── validation.js   // Validációs segédfüggvények
│   ├── App.js             
│   ├── App.css           
│   ├── index.js            
│   ├── index.css            
│   └── firebase.js                 // Firebase konfiguráció
│   └── main.js                 
│   └── tailwind.css                 
├── index.html              
├── .gitignore              // A Git ignorálási beállítások fájlja
├── package.json            
├── package-lock.json           
├── firebase.js         
├── firebase.json         
├── firebaserc        
├── postcss.config.js         
├── vite.config.js         
└── README.md                  

