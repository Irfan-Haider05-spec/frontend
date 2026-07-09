module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "dist",
    "coverage",
    "node_modules",
    ".eslintrc.cjs"
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  "rules": {
    "react/react-in-jsx-scope": "off",

    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],

    "react/no-unknown-property": ["error", {
      "ignore": ["htmlType", "clip-path", "fill-rule", "clip-rule"]
    }],

    "react-hooks/exhaustive-deps": "off",

    "no-unsafe-optional-chaining": "warn",

    "react/prop-types": "off",

  },
  overrides: [
    {
      files: ["src/sw/firebase-messaging-sw.template.js"],
      env: { serviceworker: true, browser: true },
      globals: {
        firebase: "readonly",
        __VITE_FIREBASE_API_KEY__: "readonly",
        __VITE_FIREBASE_AUTH_DOMAIN__: "readonly",
        __VITE_FIREBASE_PROJECT_ID__: "readonly",
        __VITE_FIREBASE_STORAGE_BUCKET__: "readonly",
        __VITE_FIREBASE_MESSAGING_SENDER_ID__: "readonly",
        __VITE_FIREBASE_APP_ID__: "readonly",
      },
    },
  ],
};
