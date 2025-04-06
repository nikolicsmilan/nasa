// .eslintrc.cjs
module.exports = {
  root: true,
  // Alapértelmezett beállítások (lehetnek üresek vagy általánosak)
  ignorePatterns: ['dist', 'build', '.eslintrc.cjs', 'node_modules'],

  overrides: [
    // Frontend (React) specifikus beállítások
    {
      files: ['frontend/**/*.{js,jsx,ts,tsx}'], // Csak a frontend mappán belüli fájlokra
      env: { browser: true, es2020: true },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier', // Fontos, hogy a Prettier legyen az utolsó az extends-ben itt is!
      ],
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      settings: { react: { version: '18.2' } },
      plugins: ['react-refresh'],
      rules: {
        'react/prop-types': 'off', // Példa: prop-types kikapcsolása, ha TS-t használsz
        'react/react-in-jsx-scope': 'off', // Az új JSX transform miatt nem kell
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        // ... egyéb frontend specifikus szabályok
      },
    },
    // Backend (Node.js) specifikus beállítások
    {
      files: ['backend/**/*.js'], // Csak a backend mappán belüli fájlokra
      env: { node: true, es2020: true },
      extends: [
        'eslint:recommended',
        'prettier', // Prettier itt is kell, ha használod backend kódon is
      ],
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, // Vagy 'commonjs', ha CJS-t használsz a backendben
      rules: {
        // ... backend specifikus szabályok (pl. nincs böngésző API használat)
        'no-console': 'warn', // Példa szabály
      },
    },
  ],
};
