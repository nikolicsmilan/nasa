// .eslintrc.cjs
module.exports = {
  root: true,
  // --- ADD THIS SECTION ---
  env: {
    browser: true, // Assume browser environment globally unless overridden
    es2020: true,   // Allow ES2020 features globally
    node: true      // Allow Node.js globals globally (useful for config files, backend)
  },
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript standard
    sourceType: 'module',  // Expect ES modules globally
    ecmaFeatures: {
      jsx: true           // Enable JSX parsing globally (React projects usually need this)
    }
  },
  // -----------------------
  settings: {             // Move settings to root if applicable globally
    react: {
      version: 'detect' // Automatically detect React version
    }
  },
  ignorePatterns: ['dist', 'build', '.eslintrc.cjs', 'node_modules', '**/*_mentes.*', '**/*.config.js'], // Ignore backup files and maybe root config files if they cause issues

  extends: [ // Move common extends here
    'eslint:recommended',
    'plugin:react/recommended', // Keep react rules accessible globally for overrides
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier' // Keep prettier at the end globally
  ],
  plugins: [ // Move common plugins here
     'react', // Explicitly declare react plugin
     'react-hooks',
     'react-refresh'
  ],


  overrides: [
    // Frontend (React) specific settings
    {
      files: ['src/**/*.{js,jsx,ts,tsx}', 'frontend/**/*.{js,jsx,ts,tsx}'], // Apply to src/ and frontend/ folders
      // env, parserOptions, settings, extends, plugins are inherited from root
      // Only specify things that DIFFER from the root config
      rules: {
         // Frontend-specific rules override/add to root rules
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
         // Maybe disable node-specific rules here if needed
         'no-console': 'off', // Example: Allow console in frontend dev
      },
    },
    // Backend (Node.js) specific settings
    {
      files: ['backend/**/*.js'], // Apply only to files within the backend folder
      env: {
        node: true, // Ensure Node.js env is primary here
        browser: false // Ensure browser env is off here
      },
      // Inherits 'eslint:recommended', 'prettier' from root
      // Can add node-specific extends if needed: e.g., 'plugin:node/recommended' (requires installation)
      rules: {
        // Backend-specific rules override/add to root rules
        'react/prop-types': 'off', // Turn off react rules for backend
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react-refresh/only-export-components': 'off',
        // Add/adjust backend rules
        'no-console': 'warn', // Keep console warning for backend
        'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Example: warn unused vars, ignore if starts with _

        // Example node-specific rules (if you install eslint-plugin-node)
        // 'node/no-unpublished-require': 'off',
      },
    },
    // Config files (Example) - Often need CommonJS if not using type:module everywhere
    // {
    //   files: ['*.config.js', '.eslintrc.cjs'],
    //   env: {
    //     node: true,
    //   },
    //   parserOptions: {
    //     sourceType: 'script' // Or 'commonjs' if applicable depending on ESLint version/plugins
    //   }
    // }
  ],
   // Global rules can be defined here, they apply unless overridden
   rules: {
       // Example: Allow console.log globally for now, override specific folders
       // 'no-console': 'off',
   }
};