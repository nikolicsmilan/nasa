// backend/user-service/.eslintrc.js
module.exports = {
    root: true, // Fontos: ez a legfelső szintű konfiguráció
    env: {
      node: true, // Engedélyezi a Node.js globális változókat és szabályokat
      es2020: true, // Engedélyezi az ES2020 szintaxist
    },
    extends: ['eslint:recommended'], // Használja az ajánlott ESLint szabályokat
    parserOptions: {
      ecmaVersion: 2020, // Megadja az ECMAScript verziót
      sourceType: 'script', // Fontos: Node.js-ben általában script a modulrendszer
    },
    rules: {
      // Ide jöhetnek a backend-specifikus szabályok
      'no-console': 'warn', // Figyelmeztet a console.log használatára
    },
  };