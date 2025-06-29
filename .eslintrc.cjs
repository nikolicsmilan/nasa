// .eslintrc.cjs

// This line specifies that this is a Node.js module, allowing us to use `module.exports`.
module.exports = {
  // This tells ESLint that this is the root configuration file for the project.
  // It will stop looking for other `.eslintrc` files in parent directories.
  root: true,

  // --- GLOBAL ENVIRONMENT SETTINGS ---
  // Defines the environments your code will run in, providing predefined global variables.
  env: {
    browser: true, // Enables browser global variables like `window`, `document`, etc.
    es2020: true,  // Enables ES2020 globals and syntax (e.g., BigInt).
    node: true     // Enables Node.js global variables and scoping (e.g., `process`, `__dirname`).
  },

  // --- PARSER CONFIGURATION ---
  // Configures how ESLint should interpret your code.
  parserOptions: {
    ecmaVersion: 'latest', // Use the most recent version of ECMAScript syntax.
    sourceType: 'module',  // Specifies that you are using ES Modules (import/export).
    ecmaFeatures: {
      jsx: true          // Enables parsing of JSX syntax for React.
    }
  },

  // --- PLUGIN-SPECIFIC SETTINGS ---
  // Shared settings that will be used by some ESLint plugins.
  settings: {
    react: {
      version: 'detect' // Automatically detects the version of React to use.
    }
  },

  // --- IGNORED FILES AND DIRECTORIES ---
  // A list of patterns for files and folders that ESLint should completely ignore.
  ignorePatterns: [
    'dist',             // Ignore build output directory.
    'build',            // Ignore another common build output directory.
    '.eslintrc.cjs',    // Ignore the ESLint config file itself.
    'node_modules',     // Always ignore the node_modules folder.
    '**/*_mentes.*',    // Ignore any backup files you created.
    '**/*.config.js'    // Ignore common configuration files like vite.config.js, etc.
  ],

  // --- BASE CONFIGURATIONS (EXTENDS) ---
  // A list of pre-configured rule sets that your configuration will build upon.
  // Rules in later configs override rules from earlier ones.
  extends: [
    'eslint:recommended',         // ESLint's own recommended base rules.
    'plugin:react/recommended',   // Recommended rules for React from `eslint-plugin-react`.
    'plugin:react/jsx-runtime',   // Rules for the new JSX transform (no `import React` needed).
    'plugin:react-hooks/recommended', // Recommended rules for React Hooks (e.g., `useEffect` dependencies).
    'prettier'                    // Turns off all ESLint formatting rules that might conflict with Prettier. MUST BE LAST.
  ],

  // --- PLUGINS ---
  // Loads plugins which can provide additional custom rules.
  plugins: [
     'react',                     // Core React linting rules.
     'react-hooks',               // Rules for React Hooks.
     'react-refresh'              // Rules to ensure components are compatible with Fast Refresh.
  ],


  // --- OVERRIDES ---
  // Allows you to apply different configurations to specific sets of files.
  // This is perfect for a project with mixed code types (e.g., frontend and backend).
  overrides: [

    // --- BLOCK 1: FRONTEND CODE (React + TypeScript) ---
    {
      // Apply this block of configuration only to these files.
      files: ['src/**/*.{js,jsx,ts,tsx}', 'frontend/**/*.{js,jsx,ts,tsx}'],
      
      // PARSER: This tells ESLint how to read and understand TypeScript files.
      parser: '@typescript-eslint/parser',

      // EXTENDS (for Frontend): These rule sets are applied specifically to the frontend files.
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended', // Recommended rules from the TypeScript-ESLint plugin.
        'prettier'                               // Again, Prettier is last to disable formatting rules.
      ],
      
      // PLUGINS (for Frontend): These plugins are activated for the frontend files.
      plugins: [
        'react',
        'react-hooks',
        'react-refresh',
        '@typescript-eslint'                      // The TypeScript-ESLint plugin.
      ],
      
      // RULES (for Frontend): Custom rule adjustments for the frontend code.
      rules: {
        'react/prop-types': 'off', // Turn off prop-types validation, as TypeScript handles this.
        'react/react-in-jsx-scope': 'off', // Turn off rule requiring `import React`, as it's not needed with modern React/Vite.
        'react/jsx-no-target-blank': 'off', // Turn off rule for `target="_blank"` without `rel="noreferrer"`. Be careful with this.
        
        // Configuration for the `react-refresh` plugin.
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        
        'no-console': 'off', // Allow `console.log` statements in frontend code (useful for debugging).

        // This is a key improvement for TypeScript:
        'no-unused-vars': 'off', // 1. Turn off the default ESLint `no-unused-vars` rule.
        '@typescript-eslint/no-unused-vars': [ // 2. Enable the TypeScript-aware version instead. It's smarter.
          'error', // Report unused variables as errors.
          { 
            'argsIgnorePattern': '^_', // Don't report errors for function arguments that start with an underscore.
            'varsIgnorePattern': '^_', // Don't report errors for variables that start with an underscore.
            'caughtErrorsIgnorePattern': '^_' // Don't report errors for caught error variables that start with an underscore.
          }
        ]
      },
    },

    // --- BLOCK 2: BACKEND CODE (Node.js) ---
    {
      // Apply this block of configuration only to these files.
      files: ['backend/**/*.js'],

      // Environment for the backend.
      env: {
        node: true,     // It's a Node.js environment.
        browser: false  // It's NOT a browser environment.
      },
      
      // RULES (for Backend): Custom rule adjustments for backend code.
      rules: {
        // Turn off React-specific rules for backend files.
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react-refresh/only-export-components': 'off',
        
        // Backend-specific rules.
        'no-console': 'warn', // In the backend, logging to console is often for production, so let's just warn.
        'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Warn about unused variables, ignoring those starting with _.
      },
    },
  ],

   // --- GLOBAL RULES ---
   // Rules defined here apply to all files unless they are overridden in a block above.
   // It's often cleaner to define all rules within the `overrides` section.
   rules: {
   }
};