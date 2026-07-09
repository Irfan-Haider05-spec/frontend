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
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "off",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": ["error",
      { ignore: ["htmlType", "clip-path", "fill-rule", "clip-rule"] }
    ],
    "no-useless-escape": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
