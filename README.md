nasa/
├── public/
├── build/
│   ├── index.html          // Az alkalmazás fő HTML fájlja
├── src/
│   ├── assets/             // Az alkalmazás által használt statikus erőforrások
│   │   └── images/         // Képek mappája
│   │   └── video         // 
│   ├── context/   
│   ├── components/   
│   │   ├── Sidebar/         //mappa a Sidebar komponensnek
│   │   │   └── Sidebar.js   // Sidebar komponens fájlja
|   |── hooks/      // 
│   ├── layouts/            // Az alkalmazás elrendezési komponensei
│   │   └── Layout1.js// Az alapértelmezett elrendezés komponense
|   |   └── Layout2.js// A sentry (dashboard) elrendezés komponense
│   ├── pages/              // Az egyes oldalak komponensei
│   │   ├── Home/           // A főoldal komponense és annak alkomponensei
│   │   │   ├── Home.js
│   │   │   └── components/ // A főoldal komponens alkomponensei
│   │   ├── Sentry/          // A "Sentry" oldal komponense és annak alkomponensei
│   │   │   ├── Sentry.js
│   │   │   └── components/ //
│   ├── firebase/           // 
│   │   ├── auth.js          // 
│   │   └── firestore.js     // 
│   │   └── fileupload.js     // 
│   ├── utils/              // Segédfüggvények és segédosztályok
│   │   ├── motion.js         // Autentikációs segédfüggvények
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

