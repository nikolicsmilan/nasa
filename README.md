# Project Name: NASA

## Directory Structure

# NASA Project - Fájlstruktúra

## Gyökérkönyvtár

├── .eslintrc.cjs                // ESLint konfiguráció (kódstílus)
├── .firebaserc                  // Firebase CLI konfiguráció
├── .gitignore                   // Git által figyelmen kívül hagyott fájlok
├── App.css                      // Globális és egyedi CSS stílusok
├── App.jsx                      // Fő React alkalmazás komponens, router, kontextusok
├── firebase.js                  // Firebase inicializálás és exportok
├── index.css                    // Tailwind alap importok
├── index.html                   // HTML belépési pont
├── main.jsx                     // React DOM inicializálás, belépési pont
├── package-lock.json            // Függőségek rögzített verziói
├── package.json                 // Projekt metaadatok, függőségek, scriptek
├── postcss.config.js            // PostCSS konfiguráció
├── README.md                    // Projekt leírása (ez a fájl)
├── scripts/                     // Segédszkriptek a fejlesztéshez
│   └── collectSourceFiles.cjs   // Szkript a forrásfájlok tartalmának összegyűjtéséhez
├── serve.json                   // Konfiguráció a `serve` csomaghoz (opcionális)
├── tailwind.config.js           // Tailwind CSS konfiguráció
├── tailwind.css                 // Tailwind direktívák importálása
└── vite.config.js               // Vite build eszköz konfiguráció

## src/ - Forráskód

├── api/                         // API-val kapcsolatos kód (ha lenne)
│   └── info.jsx                 // Statikus infó komponens (jelenleg nem használt?)
├── assets/                      // Statikus erőforrások (képek, videók, hangok - nincs listázva)
├── components/                  // Újrafelhasználható UI komponensek
│   ├── buttons/                 // Egyedi gomb komponensek
│   │   ├── GlowButton2 .jsx     // Glow effekt gomb variáció
│   │   ├── GlowyButton.jsx      // Glow effekt gomb variáció
│   │   ├── GlowyButton3.jsx     // Glow effekt gomb variáció
│   │   ├── GlowyButton4.jsx     // Glow effekt gomb variáció
│   │   └── GlowyButton5.jsx     // Glow effekt gomb (menüben használt)
│   ├── Charts/                  // Diagram komponensek
│   │   ├── area/                // Terület diagram
│   │   │   ├── AreaChartComponent.jsx    // Fő Area chart komponens (egyszerűsített)
│   │   │   ├── areachartlineoptions.js // Area/Line chart opciók generálása
│   │   │   ├── CustomAreaChartLine.jsx // Wrapper a <Line> elemhez
│   │   │   ├── displayeddataexample.js // Példa adat (debug)
│   │   │   └── example.js              // Példa chart data (debug)
│   │   ├── bar/                 // Oszlopdiagram
│   │   │   ├── BarChartComponent.jsx // Fő Bar chart komponens (egyszerűsített)
│   │   │   ├── barchartOptions.js    // Bar chart opciók generálása (vízszintes)
│   │   │   ├── BarCharts.jsx         // Régi/alternatív Bar chart (Recharts)
│   │   │   └── CustomBarChart.jsx    // Wrapper a <Bar> elemhez
│   │   ├── funnel/              // Tölcsér diagram (régi)
│   │   │   └── FunnelChartComponent.jsx // Tölcsér chart (régi contexttel)
│   │   ├── line/                // Vonal diagram (régi/fejlesztés alatt)
│   │   │   ├── CustomLineChart.jsx   // Wrapper a <Line> elemhez (hiányos)
│   │   │   ├── LineChartComponent.jsx// Fő Line chart (régi contexttel)
│   │   │   └── masolatLine.jsx       // Másolat/régi Line chart
│   │   ├── pie/                 // Kördiagram
│   │   │   ├── chartOptions.js       // Pie chart opciók (datalabels)
│   │   │   ├── CustomPieChart.jsx    // Wrapper a <Pie> elemhez
│   │   │   ├── PieChart.jsx          // Régi Pie chart
│   │   │   └── PieChartComponent.jsx // Fő Pie chart komponens (kategorizálással)
│   │   ├── radar/               // Radar diagram (régi)
│   │   │   └── RadarChartComponent.jsx // Radar chart (régi contexttel)
│   │   ├── radial/              // Sugárirányú diagram (régi)
│   │   │   └── RadialBarChartComponent.jsx // Radial chart (régi contexttel)
│   │   ├── scatter/             // Pont diagram (régi)
│   │   │   └── ScatterChartComponent.jsx // Scatter chart (régi contexttel)
│   │   └── index.js             // Chart komponensek exportálása
│   ├── consoles/                // "Konzol" UI elemek
│   │   ├── views/               // Konkrét konzol nézetek
│   │   │   ├── BiggerConsoles.jsx     // Nagyobb hexagonális menüelemek
│   │   │   ├── Circle.jsx             // SVG kör rajzoló
│   │   │   ├── CircuitLines.jsx       // Dekoratív vonalak (hibás lehet)
│   │   │   ├── Consoles.jsx           // Általános gomb/link megjelenítő (settings)
│   │   │   ├── CoordinateSystem.jsx   // SVG koordináta rendszer (kísérleti)
│   │   │   ├── DesktopConsoleView.jsx // Settings overlay desktop konténer
│   │   │   ├── DrawingCanvas.jsx      // SVG vászon (kísérleti)
│   │   │   ├── FlatButtonConsole.jsx  // Lapos gombok (GraphControls alternatíva)
│   │   │   ├── GeneralCircle.jsx      // Általános SVG kör
│   │   │   ├── HexagonalIconList.jsx  // Hexagonális ikon lista (kísérleti)
│   │   │   ├── HexagonalIconList2.jsx // Hexagonális ikon lista 2 (kísérleti)
│   │   │   ├── InvertedYNeon.jsx      // SVG neon effekt (kísérleti)
│   │   │   ├── MainConsole.jsx        // Régi központi panel (useWindowSize)
│   │   │   ├── MobileConsoleView.jsx  // Settings overlay mobil konténer
│   │   │   ├── NeonShape.jsx          // SVG neon forma (kísérleti)
│   │   │   ├── NeonShape2.jsx         // SVG neon forma 2 (kísérleti)
│   │   │   ├── SineWave.jsx           // SVG szinusz hullám (kísérleti)
│   │   │   ├── SineWave2.jsx          // SVG szinusz hullám 2 (kísérleti)
│   │   │   ├── SquareminConsole.jsx   // Kisméretű infó konzol
│   │   │   └── Super3dConsole.jsx     // 3D-s, glow gombok (GraphControls)
│   │   ├── BottomConsole.jsx      // Alsó konzolsáv (mobil?)
│   │   ├── DataConsole.jsx        // User/böngésző adatokat megjelenítő tartalom
│   │   ├── GenericConsole.jsx     // Általános gomb konzol wrapper
│   │   ├── LanguageConsole.jsx    // Nyelvválasztó tartalom
│   │   ├── NavigationConsole.jsx  // Navigációs menü tartalom
│   │   ├── SoundConsole.jsx       // Hangbeállítás tartalom
│   │   └── StyleConsole.jsx       // Stílusválasztó tartalom
│   ├── Sidebar/                 // Settings oldalsáv
│   │   ├── SettingsBar.jsx        // Beállítási gombok listája
│   │   └── SettingsBarAnimation.jsx // Animált wrapper a SettingsBar-hoz
│   ├── Table/                   // Táblázat komponens
│   │   └── Table_1.jsx            // Egyszerű táblázat
│   ├── TypingAnimation/         // Gépelési animáció
│   │   └── TypingAnimation.jsx    // Gépelés effekt komponens
│   └── ProgressCircleChart .jsx // Kör progress indikátor
├── context/                     // React Kontextusok
│   ├── AudioContext.jsx         // Régi audio kontextus (elavult)
│   ├── ConsoleContext.jsx       // Globális állapot a konzol egyes részeihez
│   └── DataContext.jsx          // Globális állapot (user, UI, info, hang)
├── hooks/                       // Egyedi React Hookok
│   ├── use-animations.js          // Régi animációs hook
│   ├── use-areachartcolors.js   // Dinamikus chart színek lekérése
│   ├── use-areachartdata.js     // Area/Line chart adat generátor
│   ├── use-barchartcolors.js    // Bar chart specifikus színek (nem használt)
│   ├── use-barchartsdata.js     // Bar chart adat generátor (aktív verzió)
│   ├── use-color.js             // Gomb szín logikája állapot alapján
│   ├── use-filterTable.js       // Régi szűrési állapot kezelő
│   ├── use-info.js              // User/böngésző info lekérdezése
│   ├── use-linechartcolors.js   // Line chart specifikus színek
│   ├── use-linechartdata.js     // Line chart adat generátor (duplikált?)
│   ├── use-piechartdata.js      // Pie chart kategorizálás és adat generátor
│   ├── use-processed-graph-data.js // Fő adatfeldolgozó hook (Graph)
│   ├── use-saveuser.js          // User beállítások mentése/betöltése (localStorage)
│   ├── use-statustable.jsx      // Régi komplex állapot kezelő
│   ├── use-windowsize.js        // Ablakméret figyelő
│   ├── useAsteroidData.js       // Aszteroida adat lekérdezés (dummy)
│   ├── useBarChartData.js       // Bar chart adat generátor (aktív verzió?)
│   └── useMenuLogic.js          // Régi menü logika
├── layouts/                     // Oldal elrendezések
│   ├── LayoutAsteoride.jsx      // Fő layout (Graph, Test, Admin) videóval, headerrel
│   ├── LayoutGraph.jsx          // Layout a Graph oldalhoz (valószínűleg LayoutAsteoride másolat/variáns)
│   └── LayoutHome.jsx           // Kezdőoldal layoutja
├── locales/                     // Statikus adatok, konfigurációk
│   └── graphdata.js             // Graph oldal vezérlőinek adatai
│   └── (többi .js fájl)         // Egyéb statikus adatok (filter, dummy, nav stb. - a script nem listázta)
├── pages/                       // Oldal szintű komponensek
│   ├── Admin/                   // Admin oldal
│   │   └── Admin.jsx
│   ├── Asteroide/               // Régi/fejlesztés alatti Asteroide oldal
│   │   ├── Asteroide.jsx
│   │   ├── components/          // Asteroide specifikus komponensek
│   │   ├── dashboards/          // Asteroide dashboardok
│   │   ├── desktop/             // Asteroide desktop nézet
│   │   └── mobile/              // Asteroide mobil nézet
│   ├── AsteroideDetail/         // Aszteroida részletező oldal
│   │   └── AsteroideDetail.jsx
│   ├── Dashboard/               // Dashboard oldal
│   │   └── Dashboard.jsx
│   ├── Error/                   // Hiba oldal
│   │   └── Error.jsx
│   ├── Graph/                   // Fő adatvizualizációs oldal
│   │   ├── components/          // Graph specifikus alkomponensek (Panelek, Content, Controls)
│   │   ├── desktop/             // Graph desktop nézet
│   │   │   └── GraphDesktop.jsx   // Desktop elrendezés (egyszerűsített)
│   │   ├── mobile/              // Graph mobil nézet
│   │   │   └── GraphMobile.jsx    // Mobil komponens (fejlesztés alatt?)
│   │   └── Graph.jsx            // Graph oldal fő logikája
│   ├── Home/                    // Kezdőoldal
│   │   ├── components/          // Home specifikus komponensek
│   │   └── Home.jsx             // Kezdőoldal fő komponense
│   └── Test/                    // Teszt oldal
│       └── Test.jsx
└── utils/                       // Segédfüggvények, eszközök
    ├── calculateStatistics.js         // Régi statisztika számítás
    ├── calculateTopBottomAverage.js   // Régi adat kinyerés
    ├── colorUtils.js                  // Színárnyalat generátor
    ├── createBarChartData.js        // Régi Bar chart adat formázó
    ├── createSampledData.js         // Régi adat mintavételező
    ├── createTopBottomAverageData.js// Régi top/bottom/avg adat formázó
    ├── getComputedStyleColor.js     // CSS szín kiolvasó DOM-ból
    ├── graphDataUtils.ts            // Graph adatfeldolgozó segédfüggvények
    ├── handleFilterClick.js         // Régi filter gomb logika
    ├── handleGraphClick.js          // Régi graph gomb logika
    ├── mainFilteredData.js          // Régi központi adatszűrő/formázó
    └── motion.js                    // Framer Motion animációkNem
## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nikolicsmilan/nasa.git