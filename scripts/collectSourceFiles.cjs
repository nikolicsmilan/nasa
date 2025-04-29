// scripts/collectSourceFiles.cjs (vagy .js, ha ESM)

// CommonJS importok (ha .cjs fájlt használsz)
const fs = require('fs').promises;
const path = require('path');

/* VAGY ES Module importok (ha .js fájlt használsz és a 2. megoldást választottad)
import fs from 'fs/promises';
import path from 'path';
*/

// Konfiguráció
const srcDirectory = path.join(process.cwd(), 'src'); // Az src mappa útvonala
const outputDir = path.join(process.cwd(), 'logs');   // A logs mappa útvonala
const outputFile = path.join(outputDir, 'allfiles.txt'); // A kimeneti fájl teljes útvonala
const allowedExtensions = ['.js', '.jsx', '.css']; // A keresett kiterjesztések

// === KIVÉTELEK ===
// Add meg itt azokat a fájlneveket vagy relatív útvonalakat (az src-től),
// amelyeket ki szeretnél hagyni.
// Használj sima perjelet (/) az útvonalakban a platformfüggetlenségért.
const exclusions = [
    // Példák (tartsd meg vagy töröld őket, ahogy neked jó):
    'setupTests.js',                          // Konkrét fájlnév (bárhol az src-n belül)
    'reportWebVitals.js',                   // Másik konkrét fájlnév
    // 'legacy/oldComponent.jsx',              // Fájl egy adott almappában (src/legacy/oldComponent.jsx)
    // 'generated/',                           // Teljes mappa kihagyása (minden, ami az src/generated/ alatt van)
    '.test.js',                             // Fájlok, amelyek nevében szerepel a '.test.js'
    '.spec.js',                             // Fájlok, amelyek nevében szerepel a '.spec.js'
    // 'service-worker.js',                    // Még egy példa

    // src/locales mappa fájljai, kivéve graphdata.js
    'locales/chartoption_25_04_19.js',
    'locales/filterconsole.js',
    // 'locales/graphdata.js', // Ezt NEM zárjuk ki
    'locales/hexagon.js',
    'locales/localdata.js',
    'locales/nasaapi.js',
    'locales/nasadummy.js',
    'locales/navigationData.js',

    // Ide írhatsz még további kivételeket, ha vannak
];
// ===============

// Funkció a könyvtár rekurzív feldolgozására
async function processDirectory(directoryPath) {
  try {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directoryPath, entry.name);
      const relativePathSrc = path.relative(srcDirectory, fullPath); // Relatív útvonal az SRC mappától
      // Platformfüggetlen útvonal normalizálása (mindig / perjelet használ)
      const normalizedRelativePath = relativePathSrc.split(path.sep).join('/');

      if (entry.isDirectory()) {
        // Ellenőrizzük, hogy a teljes mappa ki van-e zárva
        const isDirExcluded = exclusions.some(exclusion =>
            exclusion.endsWith('/') && normalizedRelativePath.startsWith(exclusion)
        );
        if (!isDirExcluded) {
          await processDirectory(fullPath); // Rekurzió csak akkor, ha a mappa nincs kizárva
        } else {
          console.log(`Skipping excluded directory: src/${normalizedRelativePath}/`); // Hozzáadva a '/' a mappa jelzésére
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();

        if (allowedExtensions.includes(ext)) {
          // Ellenőrizzük a kivételeket
          const isExcluded = exclusions.some(exclusion => {
            if (exclusion.endsWith('/')) {
              // Mappa kizárás (ezt már a fenti rekurzió ellenőrzés kezeli, de biztonsági okokból itt is lehet)
              return normalizedRelativePath.startsWith(exclusion);
            } else if (exclusion.startsWith('.')) {
               // Kiterjesztés vagy névrészlet alapján (pl. .test.js)
               return normalizedRelativePath.includes(exclusion);
            } else {
              // Pontos fájlnév vagy pontos relatív útvonal (src-től)
              // Először nézzük a teljes relatív útvonalat
              if (normalizedRelativePath === exclusion) return true;
              // Ha nem egyezik, nézzük csak a fájlnevet (ha az exclusion nem tartalmaz '/')
              if (!exclusion.includes('/') && path.basename(normalizedRelativePath) === exclusion) return true;
              return false; // Ha egyik sem, akkor nem zártuk ki
            }
          });

          if (isExcluded) {
            console.log(`Skipping excluded file: src/${normalizedRelativePath}`);
            continue; // Ugrás a következő fájlra/mappára
          }

          // Ha nincs kizárva, feldolgozzuk
          try {
            const content = await fs.readFile(fullPath, 'utf8');
            const relativePathProject = path.relative(process.cwd(), fullPath); // Relatív útvonal a projekttől a kiíráshoz
            const normalizedProjectPath = relativePathProject.split(path.sep).join('/');

            const outputContent = `
// --- START FILE: ${normalizedProjectPath} ---

${content}

// --- END FILE: ${normalizedProjectPath} ---
// -----------------------------------------\n\n`;

            await fs.appendFile(outputFile, outputContent);
            console.log(`Processed: src/${normalizedRelativePath}`);

          } catch (readError) {
            console.error(`Error reading file ${fullPath}:`, readError);
            const relativePathProject = path.relative(process.cwd(), fullPath);
             const normalizedProjectPath = relativePathProject.split(path.sep).join('/');
            await fs.appendFile(outputFile, `// !!! ERROR READING FILE: ${normalizedProjectPath} !!!\n// ${readError.message}\n// -----------------------------------------\n\n`);
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${directoryPath}:`, err);
  }
}

// Fő végrehajtó funkció
async function run() {
  console.log('Starting to collect source files...');
  try {
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputFile, ''); // Clear output file
    console.log(`Output file cleared: ${outputFile}`);
    await processDirectory(srcDirectory);
    console.log(`\nFinished collecting files. Output saved to: ${outputFile}`);
  } catch (err) {
    console.error('An error occurred during the process:', err);
  }
}

// Futtatás
run();


/*// scripts/collectSourceFiles.js
const fs = require('fs').promises; // Aszinkron fájlrendszer műveletekhez
const path = require('path');     // Útvonalak kezeléséhez

// Konfiguráció
const srcDirectory = path.join(process.cwd(), 'src'); // Az src mappa útvonala
const outputDir = path.join(process.cwd(), 'logs');   // A logs mappa útvonala
const outputFile = path.join(outputDir, 'allfiles.txt'); // A kimeneti fájl teljes útvonala
const allowedExtensions = ['.js', '.jsx', '.css']; // A keresett kiterjesztések

// Funkció a könyvtár rekurzív feldolgozására
async function processDirectory(directoryPath) {
  try {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        // Ha könyvtár, rekurzívan feldolgozzuk
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        // Ha fájl és a kiterjesztése megfelelő
        if (allowedExtensions.includes(ext)) {
          try {
            const content = await fs.readFile(fullPath, 'utf8');
            const relativePath = path.relative(process.cwd(), fullPath); // Relatív útvonal a projekt gyökerétől

            // Tartalom formázása és hozzáfűzése a kimeneti fájlhoz
            const outputContent = `
// --- START FILE: ${relativePath} ---

${content}

// --- END FILE: ${relativePath} ---
// -----------------------------------------\n\n`;

            await fs.appendFile(outputFile, outputContent);
            console.log(`Processed: ${relativePath}`);

          } catch (readError) {
            console.error(`Error reading file ${fullPath}:`, readError);
            // Opcionális: Hibaüzenet hozzáfűzése a fájlhoz
            await fs.appendFile(outputFile, `// !!! ERROR READING FILE: ${relativePath} !!!\n// ${readError.message}\n// -----------------------------------------\n\n`);
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${directoryPath}:`, err);
  }
}

// Fő végrehajtó funkció
async function run() {
  console.log('Starting to collect source files...');
  try {
    // Ellenőrizzük/létrehozzuk a logs mappát
    await fs.mkdir(outputDir, { recursive: true });

    // Kiürítjük a kimeneti fájlt, ha már létezik
    await fs.writeFile(outputFile, '');
    console.log(`Output file cleared: ${outputFile}`);

    // Elindítjuk a feldolgozást az src könyvtárral
    await processDirectory(srcDirectory);

    console.log(`\nFinished collecting files. Output saved to: ${outputFile}`);

  } catch (err) {
    console.error('An error occurred during the process:', err);
  }
}

// Futtatás
run();*/