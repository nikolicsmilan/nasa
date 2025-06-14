// backend/user-service/.eslintrc.js

module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  rules: {
    // Alapértelmezett szabályok a .js fájlokra
    'no-console': 'warn',
  },
  // --- EZ AZ ÚJ, KULCSFONTOSSÁGÚ RÉSZ ---
  overrides: [
    {
      // A következő szabályok csak azokra a fájlokra érvényesek,
      // amiknek a neve .test.js vagy .spec.js végződésű.
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        // Itt adjuk meg a Jest környezetet
        jest: true,
      },
      // Itt mondjuk meg, hogy használja a plugin ajánlott szabályait
      extends: ['plugin:jest/recommended'],
      // Itt regisztráljuk magát a plugint
      plugins: ['jest'],
      // Itt felülírhatsz vagy hozzáadhatsz Jest-specifikus szabályokat
      rules: {
        // Példa: Figyelmeztet, ha a tesztben .skip-et használsz
        'jest/no-disabled-tests': 'warn', 
        // Példa: Hibát dob, ha a tesztben .only-t használsz (hogy véletlenül se maradjon benne)
        'jest/no-focused-tests': 'error', 
      },
    },
  ],
};